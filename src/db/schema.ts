import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const interestedUsers = sqliteTable('interested_users', {
  id: int().primaryKey({ autoIncrement: true }),
  email: text().notNull().unique(),
  createdAt: text().notNull().default(new Date().toISOString()),
});
