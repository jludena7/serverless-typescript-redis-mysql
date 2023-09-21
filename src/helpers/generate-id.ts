import { customAlphabet } from 'nanoid'

export const generateId = (): string => {
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const nanoid = customAlphabet(alphabet, 32)
  return nanoid()
}
