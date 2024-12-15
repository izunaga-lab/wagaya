import fs from 'fs'
import path from 'path'

import { contentDirectory } from './directory'
import { readMarkdownFile } from './markdown'

import { Article } from '@/types'

const loadNewsArticles = async (): Promise<Article[]> => {
  const files = fs.readdirSync(path.join(contentDirectory, 'news'))
  const newsArticles: Article[] = []

  for (const file of files) {
    const filePath = path.join(contentDirectory, 'news', file)
    if (path.extname(file) === '.md') {
      const { data, content } = await readMarkdownFile(filePath)

      const newsArticle: Article = {
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

let allAscNewsArticles: Article[]
let allDescNewsArticles: Article[]
export const getAllNews = async (sort: 'asc' | 'desc' = 'desc'): Promise<Article[]> => {
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

export const getLatestNews = async (count: number): Promise<Article[]> => {
  const newsArticles = await getAllNews('desc')
  return newsArticles.slice(0, count)
}

export const getNewsById = async (id: string): Promise<Article> => {
  const newsArticles = await getAllNews()
  const news = newsArticles.find((news) => news.id === id)
  if (!news) {
    throw new Error('News not found')
  }
  return news
}
