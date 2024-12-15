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

const loadNewsArticles = async (): Promise<NewsArticle[]> => {
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

let allAscNewsArticles: NewsArticle[]
let allDescNewsArticles: NewsArticle[]
export const getAllNews = async (sort: 'asc' | 'desc' = 'desc'): Promise<NewsArticle[]> => {
  if (process.env.NODE_ENV === 'production') {
    allAscNewsArticles ||= await loadNewsArticles()
  } else {
    allAscNewsArticles = await loadNewsArticles()
  }

  if (sort === 'desc') {
    // .reverse() は破壊的メソッドなので、slice() で新しい配列を作成してから reverse() を呼び出す
    if (process.env.NODE_ENV === 'production') {
      allDescNewsArticles ||= allAscNewsArticles.slice().reverse()
    } else {
      allDescNewsArticles = allAscNewsArticles.slice().reverse()
    }
    return allDescNewsArticles
  }

  return allAscNewsArticles
}

export const getLatestNews = async (count: number): Promise<NewsArticle[]> => {
  const newsArticles = await getAllNews('desc')
  return newsArticles.slice(0, count)
}

export const getNewsById = async (id: string): Promise<NewsArticle> => {
  const newsArticles = await getAllNews()
  const news = newsArticles.find((news) => news.id === id)
  if (!news) {
    throw new Error('News not found')
  }
  return news
}
