import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { dbService } from '../db/index.js'
import { usersTable } from '../db/schema.js'

export const authRegistrationSchema = z.object({
  name: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(4),
})
.refine(async (data) => {
  console.log('[Checking email]')
  const user = (await dbService.db.select().from(usersTable).where(eq(usersTable.email, data.email)))[0]
  console.log('user:', user)
  return !user
}, {
  message: 'E-mail address is already taken.',
  path: ['email'],
})
