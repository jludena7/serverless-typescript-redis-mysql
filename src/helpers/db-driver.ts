import * as mysql from "mysql";
import {Pool, PoolConfig} from "mysql";

export default class DbDriver {
  private readonly _pool: Pool

  constructor () {
    if (this._pool == undefined) {
      const poolConfig: PoolConfig = {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        connectionLimit: Number(process.env.DB_CONNECTION_LIMIT),
        debug: (process.env.DB_DEBUG === 'true')
      }
      this._pool = mysql.createPool(poolConfig)
    }
  }

  pool (): Pool {
    return this._pool
  }
}
