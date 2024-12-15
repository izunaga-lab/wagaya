import fs from 'fs'
import path from 'path'

import { contentDirectory } from './directory'
import { readMarkdownFile } from './markdown'

import { Content } from '@/types'

const loadNewsContents = async (): Promise<Content[]> => {
  const files = fs.readdirSync(path.join(contentDirectory, 'news'))
  const newsContents: Content[] = []

  for (const file of files) {
    const filePath = path.join(contentDirectory, 'news', file)
    if (path.extname(file) === '.md') {
      const { data, content } = await readMarkdownFile(filePath)

      const newsContent: Content = {
        id: data.id || '',
        title: data.title || '',
        date: new Date(path.basename(file, '.md')),
        content,
      }

      newsContents.push(newsContent)
    }
  }

  return newsContents
}

let allAscNewsContents: Content[]
let allDescNewsContents: Content[]
export const getAllNews = async (sort: 'asc' | 'desc' = 'desc'): Promise<Content[]> => {
  if (process.env.NODE_ENV === 'production') {
    allAscNewsContents ||= await loadNewsContents()
  } else {
    allAscNewsContents = await loadNewsContents()
  }

  if (sort === 'desc') {
    // .reverse() は破壊的メソッドなので、slice() で新しい配列を作成してから reverse() を呼び出す
    if (process.env.NODE_ENV === 'production') {
      allDescNewsContents ||= allAscNewsContents.slice().reverse()
    } else {
      allDescNewsContents = allAscNewsContents.slice().reverse()
    }
    return allDescNewsContents
  }

  return allAscNewsContents
}

export const getLatestNews = async (count: number): Promise<Content[]> => {
  const newsContents = await getAllNews('desc')
  return newsContents.slice(0, count)
}

export const getNewsById = async (id: string): Promise<Content> => {
  const newsContents = await getAllNews()
  const news = newsContents.find((news) => news.id === id)
  if (!news) {
    throw new Error('News not found')
  }
  return news
}
