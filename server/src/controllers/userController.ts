import { type Request, type Response } from 'express';
import { User } from '../models/user.js';

function getUser(req: Request, res: Response): void {
  const user: User = {
    name: 'John',
    email: 'john@mail.com',
    descrition: '',
  }

  res.status(200).json(user);
}

export default {
  getUser,
};
