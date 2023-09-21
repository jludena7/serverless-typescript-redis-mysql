import DbDriver from '../helpers/db-driver'
import type Article from '../models/article'

export default class ArticleRepository {
  private readonly db: DbDriver
  constructor () {
    this.db = new DbDriver()
  }

  async findByCode (code: string): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.db.pool().getConnection((error, connection) => {
        if (error != null) {
          reject(error)
        } else {
          const sql = 'SELECT * FROM article a WHERE a.code = ? ;'
          connection.query(sql, [code], (error, results) => {
            if (error != null) {
              reject(error)
            } else {
              connection.release()
              resolve(results[0])
            }
          })
        }
      })
    })
  }

  async create (article: Article): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.db.pool().getConnection((error, connection) => {
        if (error != null) {
          reject(error)
        } else {
          const sql = 'INSERT INTO article SET ? ;'
          connection.query(sql, [article], (error, results) => {
            if (error != null) {
              reject(error)
            } else {
              connection.release()
              resolve(results)
            }
          })
        }
      })
    })
  }
}
