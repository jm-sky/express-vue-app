import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const usersTable = sqliteTable('users_table', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  lastName: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
})

export type UserData = typeof usersTable.$inferSelect;
