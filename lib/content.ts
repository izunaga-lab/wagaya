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

const getCachedContents = async (contentType: ContentType): Promise<Content[]> => {
  if (contentType === ContentType.ARTICLE) {
    return (allAscArticles ||= await loadContents(contentType))
  } else if (contentType === ContentType.NEWS) {
    return (allAscNews ||= await loadContents(contentType))
  }
  return []
}

const getSortedContents = (contents: Content[], sort: 'asc' | 'desc'): Content[] => {
  return sort === 'desc' ? contents.slice().reverse() : contents
}

const getCachedSortedContents = async (contentType: ContentType, sort: 'asc' | 'desc' = 'desc'): Promise<Content[]> => {
  const contents = await getCachedContents(contentType)

  if (sort === 'desc') {
    if (contentType === ContentType.ARTICLE) {
      return (allDescArticles ||= getSortedContents(contents, sort))
    } else if (contentType === ContentType.NEWS) {
      return (allDescNews ||= getSortedContents(contents, sort))
    }
  }

  return contents
}

export const getAllContents = async (contentType: ContentType, sort: 'asc' | 'desc' = 'desc'): Promise<Content[]> => {
  let contents: Content[] = []

  if (process.env.NODE_ENV === 'production') {
    contents = await getCachedSortedContents(contentType, sort)
  } else {
    contents = await loadContents(contentType)
    contents = getSortedContents(contents, sort)
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
