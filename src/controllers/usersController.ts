import { type Request, type Response } from 'express'
import { dbService } from '../db/index.js'
import { UserData, usersTable } from '../db/schema/usersTable.js'
import { User } from '../models/user.js'

async function getAllUsers(req: Request, res: Response) {
  const usersData = await dbService.db.select().from(usersTable)

  const users: User[] =usersData.map((user: UserData) => ({
    id: user.id,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
  }))

  res.status(200).json(users)
}

export default {
  getAllUsers,
}
