import jwt from 'jsonwebtoken'

export const getToken = (userId: number): string => {
  return jwt.sign({ id: userId }, String(process.env.JWT_SECRET_KEY), { expiresIn: '1800s' })
}

export const verifyToken = (token: string): unknown => {
  return jwt.verify(token, String(process.env.JWT_SECRET_KEY))
}
