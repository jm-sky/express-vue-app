import express from 'express';

import UserController from '../controllers/usersController';

const router = express.Router();

router.get('/', UserController.getAllUsers);

export default router;
