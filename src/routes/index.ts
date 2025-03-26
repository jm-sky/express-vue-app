import express from 'express'
import { jwtMiddleware } from '../middleware/jwtMiddleware.js'
import AuthRoutes from './auth.js'
import UserRoutes from './user.js'
import UsersRoutes from './users.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to our API!',
  })
})

router.use('/auth', AuthRoutes)
router.use('/user', jwtMiddleware(), UserRoutes)
router.use('/users', jwtMiddleware(), UsersRoutes)

export default router
