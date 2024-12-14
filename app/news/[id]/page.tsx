import { MarkdownContainer } from '@/components/markdown-container'
import { getAllNews, getNewsById } from '@/lib/news'

export default async function NewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const news = await getNewsById(id)
  return <MarkdownContainer markdown={news.content} />
}

export async function generateStaticParams() {
  const newsArticles = await getAllNews()
  return newsArticles.map((newsArticle) => ({ id: newsArticle.id }))
}
