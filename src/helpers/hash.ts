import bcrypt from 'bcryptjs'

export const createHash = (password: string): string => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

export const compareHash = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compareSync(password, hash)
}
