import { type APIGatewayProxyEvent } from 'aws-lambda'
import { verifyToken } from './jwt'

export const validateTokenHeader = (event: APIGatewayProxyEvent): boolean => {
  const authorization = event.headers.Authorization
  if (authorization == null) {
    throw new Error('Token key is empty')
  }

  const token = authorization.split(' ')[1]

  if (token == null) {
    throw new Error('Token key is empty or invalid')
  }

  verifyToken(token)

  return true
}
