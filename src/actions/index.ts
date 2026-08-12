import { defineAction, ActionError } from 'astro:actions';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';
import { isDatabaseConfigured, turso } from '../db/client';

type WaitlistInput = z.infer<typeof waitlistInput>;

const waitlistInput = z.object({
  email: z.email('Correo electrónico inválido').trim().toLowerCase(),
  note: z
    .string()
    .trim()
    .max(500, 'La nota no puede superar los 500 caracteres')
    .nullable()
    .optional()
    .transform((value): string | null =>
      value && value.length > 0 ? value : null
    ),
});

type JoinWaitlistResult =
  | { ok: true; email: string; persisted: boolean };

export const server = {
  joinWaitlist: defineAction({
    accept: 'json',
    input: waitlistInput,
    handler: async (input: WaitlistInput): Promise<JoinWaitlistResult> => {
      const { email, note } = input;

      if (!isDatabaseConfigured || !turso) {
        return { ok: true, email, persisted: false };
      }

      try {
        await turso.execute({
          sql: 'INSERT INTO waitlist (id, email, timestamp, note) VALUES (?, ?, ?, ?)',
          args: [randomUUID(), email, Date.now(), note],
        });

        return { ok: true, email, persisted: true };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);

        if (message.includes('UNIQUE constraint failed')) {
          throw new ActionError({
            code: 'CONFLICT',
            message: 'Este correo ya está anotado en la lista.',
          });
        }

        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'No pudimos guardar tu correo. Intentá más tarde.',
        });
      }
    },
  }),
};
