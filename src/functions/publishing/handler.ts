import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { type APIGatewayProxyEvent } from 'aws-lambda'
import AuthorService from '../../services/author.service'
import ArticleService from '../../services/article.service'
import { validateTokenHeader } from '../../helpers/validate-token-header'
import { validStringLength } from '../../helpers/common-validation'
import { articleDto } from '../../dto/article-dto'
import { authorDto } from '../../dto/author-dto'

export const createToken = middyfy(async (event: APIGatewayProxyEvent): Promise<object> => {
  try {
    const authorService = new AuthorService()
    const author = authorDto(event.body)
    const token = await authorService.createToken(author.email, author.password)
    return formatJSONResponse({
      status: 201,
      token
    })
  } catch (e) {
    return formatJSONResponse({ status: 400, message: e.message })
  }
})

export const createArticle = middyfy(async (event: APIGatewayProxyEvent): Promise<object> => {
  try {
    validateTokenHeader(event)

    const articleService = new ArticleService()
    const article = articleDto(event.body)
    const code = await articleService.createArticle(article)
    return formatJSONResponse({
      status: 201,
      code
    })
  } catch (e) {
    return formatJSONResponse({ status: 400, message: e.message })
  }
})

export const getArticle = middyfy(async (event: APIGatewayProxyEvent): Promise<object> => {
  try {
    validateTokenHeader(event)

    const code = String(event.pathParameters?.code)
    if (!validStringLength(code, 32)) {
      return formatJSONResponse({ status: 400, message: 'Invalid code format' })
    }

    const articleService = new ArticleService()
    return formatJSONResponse({
      status: 200,
      card: await articleService.findArticleByCode(code)
    })
  } catch (e) {
    return formatJSONResponse({ status: 400, message: e.message })
  }
})
