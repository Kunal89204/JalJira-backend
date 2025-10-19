import { pgTable, uuid, varchar, timestamp } from 'drizzle-orm/pg-core';

// Supabase auth.users table is in the `auth` schema
export const usersTable = pgTable('users', {
  id: uuid('id').primaryKey(), // just keep it UUID, we handle auth link separately
  fullName: varchar('full_name', { length: 255 }).notNull(),
  profileImage: varchar('profile_image', { length: 500 }),
  role: varchar('role', { length: 50 }).default('user').notNull(),
  position: varchar('position', { length: 50 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
