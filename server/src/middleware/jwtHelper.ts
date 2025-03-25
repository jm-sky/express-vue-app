import { expressjwt } from 'express-jwt'

export const jwtHelper = expressjwt({
  secret: process.env.APP_SECRET,
  algorithms: ['HS256'],
})
