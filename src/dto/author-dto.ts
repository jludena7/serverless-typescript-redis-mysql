import type Author from '../models/author'
import {
  validateEmail
} from '../helpers/common-validation'

export const authorDto = (body: any): Author => {
  const obj = JSON.parse(JSON.stringify(body))
  const author: Author = {
    email: obj.email,
    password: obj.password
  }

  if (!validateEmail(author.email)) {
    throw new Error('Invalid email format')
  }

  if (author.email == null) {
    throw new Error('Password is empty')
  }

  return author
}
