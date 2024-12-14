import fs from 'fs'
import path from 'path'

import { contentDirectory } from './directory'
import { readMarkdownFile } from './markdown'

type NewsArticle = {
  id: string
  title: string
  date: Date
  content: string
}

export const getAllNewsIds = async (): Promise<Array<{ id: string }>> => {
  const files = fs.readdirSync(path.join(contentDirectory, 'news'))
  const newsIds: Array<{ id: string }> = []

  for (const file of files) {
    const filePath = path.join(contentDirectory, 'news', file)
    if (path.extname(file) === '.md') {
      const { data, content } = await readMarkdownFile(filePath)

      const newsArticle: NewsArticle = {
        id: data.id || '',
        title: data.title || '',
        date: new Date(path.basename(file, '.md')),
        content,
      }

      newsIds.push({ id: newsArticle.id })
    }
  }

  return newsIds
}
