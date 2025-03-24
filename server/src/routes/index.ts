import express from 'express';

import AuthRoutes from './auth.js';
import UserRoutes from './user.js';
import UsersRoutes from './users.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is the API root!');
});

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/users', UsersRoutes);

export default router;
