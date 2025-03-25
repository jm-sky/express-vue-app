import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'

function login(req: Request, res: Response): void {
  const payload = {
    usr: 1,
  }

  const token: string = jwt.sign(payload, process.env.APP_SECRET)

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
