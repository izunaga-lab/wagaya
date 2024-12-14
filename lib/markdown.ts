import fs from 'fs'

import matter from 'gray-matter'

export const readMarkdownFile = async (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  return { data, content }
}
