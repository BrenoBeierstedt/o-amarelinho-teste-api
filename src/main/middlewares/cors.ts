import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.setHeader('acces-control-allow-origin', '*')
  res.setHeader('acces-control-allow-methods', '*')
  res.setHeader('acces-control-allow-headers', '*')
  next()
}
