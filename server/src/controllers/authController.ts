import { type Request, type Response } from 'express';

function login(req: Request, res: Response): void {
  res.status(200).send('123456789')
}

function logout(req: Request, res: Response): void {
  res.status(200).send()
}

export default {
  login,
  logout,
};
