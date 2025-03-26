import { expressjwt } from 'express-jwt'

export const jwtMiddleware = () => expressjwt({
  secret: process.env.APP_SECRET,
  algorithms: ['HS256'],
}).unless({
  path: ['/register', '/auth/login', '/auth/logout']
})
