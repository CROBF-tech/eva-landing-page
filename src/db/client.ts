import 'dotenv/config';
import { createClient, type Client } from '@libsql/client';

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

export const isDatabaseConfigured = Boolean(url);

export const turso: Client | null = isDatabaseConfigured
  ? createClient({
      url: url!,
      authToken,
    })
  : null;
