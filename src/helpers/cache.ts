import { createClient, type RedisClientType } from 'redis'

export default class Cache {
  private readonly _client: RedisClientType

  constructor () {
    if (this._client == undefined) {
      this._client = createClient({
        url: process.env.REDIS_URL
      })
      this._client.on('error', (error) => { console.error(`Error : ${error}`) })

      void (async () => {
        await this._client.connect()
      })()
    }
  }

  client (): RedisClientType {
    return this._client
  }
}
