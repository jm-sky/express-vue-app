import bcrypt from 'bcryptjs'
import { eq } from 'drizzle-orm'
import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import jwt from 'jsonwebtoken'
import { dbService } from '../db/index.js'
import { UserData, usersTable } from '../db/schema/usersTable.js'

export interface JwtPayload {
  usr: number
}

export interface Credentials {
  email: string
  password: string
}

async function login(req: Request<unknown, unknown, Credentials>, res: Response): Promise<void> {
  const email = req.body.email
  const password = req.body.password

  const users = await dbService.db.select().from(usersTable).where(eq(usersTable.email, email))
  const user = users[0] as UserData | undefined

  // console.log('[Auth][login] email:', email)
  // console.log('[Auth][login] password:', password)
  // console.log('[Auth][login] users:', users)

  if (!user?.password || !bcrypt.compareSync(password, user.password)) {
    res.status(StatusCodes.UNAUTHORIZED).send()
    return
  }

  const payload: JwtPayload = {
    usr: user.id,
  }

  const token: string = jwt.sign(payload, process.env.APP_SECRET)

  // console.log('[Auth][login] token:', token)

  res.status(200).json({
    token,
  })
}

function logout(req: Request, res: Response): void {
  res.status(200).send()
}

export default {
  login,
  logout,
}
