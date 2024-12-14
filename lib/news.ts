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

export const getAllNews = async (): Promise<NewsArticle[]> => {
  const files = fs.readdirSync(path.join(contentDirectory, 'news'))
  const newsArticles: NewsArticle[] = []

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

      newsArticles.push(newsArticle)
    }
  }

  return newsArticles
}

export const getNewsById = async (id: string): Promise<NewsArticle> => {
  const newsArticles = await getAllNews()
  const news = newsArticles.find((news) => news.id === id)
  if (!news) {
    throw new Error('News not found')
  }
  return news
}
