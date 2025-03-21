import express from 'express';

import AuthRoutes from './auth';
import UserRoutes from './user';
import UsersRoutes from './users';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is the API root!');
});

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/users', UsersRoutes);

export default router;
