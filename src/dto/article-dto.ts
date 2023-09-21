import type Article from '../models/article'
import {
  validStringRangeLength
} from '../helpers/common-validation'

export const articleDto = (body: any): Article => {
  const obj = JSON.parse(JSON.stringify(body))
  const article: Article = {
    title: obj.title,
    content: obj.content
  }

  if (!validStringRangeLength(article.title, 10, 250)) {
    throw new Error('Invalid code length')
  }

  return article
}
