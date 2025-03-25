import express from 'express'
import UserController from '../controllers/usersController.js'

const router = express.Router()

router.get('/', UserController.getAllUsers)

export default router
