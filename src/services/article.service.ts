import type Article from '../models/article'
import ArticleRepository from '../repository/article.repository'
import Cache from '../helpers/cache'
import * as process from 'process'
import { generateId } from '../helpers/generate-id'

export default class ArticleService {
  private readonly articleRepository: ArticleRepository
  private readonly cache: Cache

  constructor () {
    this.articleRepository = new ArticleRepository()
    this.cache = new Cache()
  }

  async createArticle (article: Article): Promise<string> {
    article.code = generateId()
    await this.articleRepository.create(article)

    return article.code
  }

  async findArticleByCode (code: string): Promise<any> {
    const cacheKey = `article:${code}`
    const articleCache = await this.cache.client().get(cacheKey)
    if (articleCache != null) {
      return JSON.parse(articleCache)
    }

    let articleDb = await this.articleRepository.findByCode(code)
    if (articleDb != null) {
      articleDb = JSON.stringify(articleDb)
      await this.cache.client().setEx(cacheKey, Number(process.env.ARTICLE_DATA_EXPIRATION), articleDb)
      return JSON.parse(articleDb)
    }

    return null
  }
}
