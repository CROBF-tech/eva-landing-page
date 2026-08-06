import type { APIRoute } from 'astro';
import { db } from '../../db';
import { interestedUsers } from '../../db/schema';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    const body = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries(new URLSearchParams(await request.text()));

    const email = typeof body.email === 'string' ? body.email.trim() : '';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Correo electrónico inválido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await db.insert(interestedUsers).values({ email });

    return new Response(JSON.stringify({ success: true, email }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    if (error?.message?.includes('UNIQUE constraint')) {
      return new Response(JSON.stringify({ success: true, email: undefined }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ error: 'No pudimos guardar tu correo. Intentá más tarde.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
