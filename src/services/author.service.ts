import AuthorRepository from '../repository/author.repository'
import { getToken } from '../helpers/jwt'
import { compareHash } from '../helpers/hash'
import Author from '../models/author'

export default class AuthorService {
  private readonly authorRepository: AuthorRepository

  constructor () {
    this.authorRepository = new AuthorRepository()
  }

  async createToken (email: string, password: string): Promise<string> {
    const author = (await this.authorRepository.findByEmail(email)) as Author
    if (author != null && await compareHash(password, author.password)) {
      return getToken(author.id)
    }

    throw new Error('User or password invalid')
  }
}
