import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { z, ZodError, ZodIssue } from 'zod'

type ValidationErrors = Record<string, string>

const prepareErrors = (error: ZodError): ValidationErrors => error.errors.reduce<ValidationErrors>((prev: ValidationErrors, issue: ZodIssue) => {
  const path = issue.path.join('.')
  prev[path] = issue.message
  return prev
}, {})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validationMiddleware(schema: z.ZodEffects<z.ZodObject<any, any>> | z.ZodObject<any, any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body)
      next()
    } catch (error) {
      if (!(error instanceof ZodError)) throw error

      const errors = prepareErrors(error)

      res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: 'Invalid data', errors })
    }
  }
}
