import express from 'express'
import AuthController from '../controllers/authController.js'
import { validationMiddleware } from '../middleware/validationMiddleware.js'
import { authLoginSchema } from '../rules/authLoginSchema.js'
import { authRegistrationSchema } from '../rules/authRegistrationSchema.js'

const router = express.Router()

router.post('/login/', validationMiddleware(authLoginSchema), AuthController.login)
router.post('/logout/', AuthController.logout)
router.post('/register/', validationMiddleware(authRegistrationSchema), AuthController.register)

export default router
