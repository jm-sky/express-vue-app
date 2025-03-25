import { eq } from 'drizzle-orm'
import { type Response } from 'express'
import { type Request } from 'express-jwt'
import { dbService } from '../db/index.js'
import { usersTable } from '../db/schema.js'
import { User } from '../models/user.js'
import { JwtPayload } from './authController.js'

async function getUser(req: Request<JwtPayload>, res: Response) {
  const userId = req.auth?.usr ?? 0
  const users = await dbService.db.select().from(usersTable).where(eq(usersTable.id, userId))

  // console.log('[Users][getUser] auth:', req.auth)
  // console.log('[Users][getUser] userId:', userId)
  // console.log('[Users][getUser] users:', users)

  const user: User = {
    id: users[0].id,
    name: users[0].name,
    lastName: users[0].lastName,
    email: users[0].email,
  }

  res.status(200).json(user)
}

export default {
  getUser,
}
