import fs from 'fs'
import path from 'path'

import { contentDirectory } from './directory'
import { readMarkdownFile } from './markdown'

import { Content, ContentType } from '@/types'

const loadContents = async (contentType: ContentType): Promise<Content[]> => {
  const files = fs.readdirSync(path.join(contentDirectory, contentType))
  const articleContents: Content[] = []

  for (const file of files) {
    const filePath = path.join(contentDirectory, contentType, file)
    if (path.extname(file) === '.md') {
      const { data, content } = await readMarkdownFile(filePath)

      const articleContent: Content = {
        id: data.id || '',
        title: data.title || '',
        date: new Date(path.basename(file, '.md')),
        content,
      }

      articleContents.push(articleContent)
    }
  }

  return articleContents
}

let allAscArticles: Content[]
let allDescArticles: Content[]
let allAscNews: Content[]
let allDescNews: Content[]

export const getAllContents = async (contentType: ContentType, sort: 'asc' | 'desc' = 'desc'): Promise<Content[]> => {
  let contents: Content[] = []
  if (process.env.NODE_ENV === 'production') {
    if (contentType === 'article') {
      allAscArticles ||= await loadContents(contentType)
      contents = allAscArticles
    } else if (contentType === 'news') {
      allAscNews ||= await loadContents(contentType)
      contents = allAscNews
    }
  } else {
    contents = await loadContents(contentType)
  }

  if (sort === 'desc') {
    // .reverse() は破壊的メソッドなので、slice() で新しい配列を作成してから reverse() を呼び出す
    if (process.env.NODE_ENV === 'production') {
      if (contentType === 'article') {
        allDescArticles ||= contents.slice().reverse()
        contents = allDescArticles
      } else if (contentType === 'news') {
        allDescNews ||= contents.slice().reverse()
        contents = allDescNews
      }
    } else {
      contents = contents.slice().reverse()
    }
  }
  return contents
}

export const getLatestContents = async (contentType: ContentType, count: number): Promise<Content[]> => {
  const contents = await getAllContents(contentType, 'desc')
  return contents.slice(0, count)
}

export const getContentById = async (contentType: ContentType, id: string): Promise<Content> => {
  const contents = await getAllContents(contentType)
  const content = contents.find((content) => content.id === id)
  if (!content) {
    throw new Error('Content not found')
  }
  return content
}
