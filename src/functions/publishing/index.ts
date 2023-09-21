import { handlerPath } from '@libs/handler-resolver'

export const createToken = {
  handler: `${handlerPath(__dirname)}/handler.createToken`,
  events: [
    {
      http: {
        method: 'post',
        path: 'token'
      }
    }
  ]
}

export const createArticle = {
  handler: `${handlerPath(__dirname)}/handler.createArticle`,
  events: [
    {
      http: {
        method: 'post',
        path: 'article'
      }
    }
  ]
}

export const getArticle = {
  handler: `${handlerPath(__dirname)}/handler.getArticle`,
  events: [
    {
      http: {
        method: 'get',
        path: 'article/{code}'
      }
    }
  ]
}
