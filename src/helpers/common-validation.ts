export const validStringMaxLength = (text: string, max: number): boolean => {
  return text.length <= max
}

export const validStringLength = (text: string, max: number): boolean => {
  return text.length == max
}

export const validStringRangeLength = (text: string, min: number, max: number): boolean => {
  return text.length >= min && text.length <= max
}

export const validateEmail = (text: string): boolean => {
  const email = String(text).toLowerCase()
  const allowed = ['gmail.com', 'hotmail.com', 'yahoo.es']
  const lastPortion = email.split('@')[1].toLowerCase()
  if (!allowed.includes(lastPortion)) {
    return false
  }

  const res = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  return res.test(email)
}
