import 'dotenv/config'
import bcrypt from 'bcryptjs'
import { drizzle, LibSQLDatabase } from 'drizzle-orm/libsql'
import { usersTable } from 'src/db/schema/usersTable.js'

class DBService {
  db: LibSQLDatabase

  constructor(db: LibSQLDatabase) {
    this.db = db
  }

  static create() {
    const db = drizzle({ connection: { url: process.env.DB_FILE_NAME }})
    return new DBService(db)
  }

  async seed() {
    const user: typeof usersTable.$inferInsert = {
      name: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: bcrypt.hashSync('Secret123!'),
    }

    await this.db.insert(usersTable).values(user)
    console.log('New user created!')
  }
}

export const dbService = DBService.create()
