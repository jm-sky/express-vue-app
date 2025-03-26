import bcrypt from 'bcryptjs'
import { reset } from 'drizzle-seed'
import { dbService } from './db/index.js'
import * as schema from './db/schema.ts'

async function main() {
  await reset(dbService.db, schema)
  const user: typeof schema.usersTable.$inferInsert = {
    name: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: bcrypt.hashSync('Secret123!'),
  }

  await dbService.db.insert(schema.usersTable).values(user)
  console.log('New user created!')
}

await main()
