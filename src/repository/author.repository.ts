import DbDriver from '../helpers/db-driver'

export default class AuthorRepository {
  private readonly db: DbDriver

  constructor () {
    this.db = new DbDriver()
  }

  async findByEmail (email: string): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.db.pool().getConnection((error, connection) => {
        if (error != null) {
          reject(error)
        } else {
          const sql = 'SELECT * FROM author a WHERE a.email = ? ;'
          connection.query(sql, [email], (error, results) => {
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
}
