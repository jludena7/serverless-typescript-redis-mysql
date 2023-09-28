import type Article from '../models/article'
import ArticleRepository from '../repository/article.repository'
import Cache from '../helpers/cache'
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

  async findArticleByCode (code: string): Promise<Article|null> {
    const cacheKey = `article:${code}`
    const articleCache = await this.cache.client().get(cacheKey)
    if (articleCache != null) {
      return (JSON.parse(articleCache)) as Article
    }

    const articleDb = await this.articleRepository.findByCode(code)
    if (articleDb != null) {
      const articleDbString = (JSON.stringify(articleDb)) as string
      await this.cache.client().setEx(cacheKey, Number(process.env.ARTICLE_DATA_EXPIRATION), articleDbString)
      return (JSON.parse(articleDbString)) as Article
    }

    return null
  }
}
