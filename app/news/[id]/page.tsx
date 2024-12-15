import { MarkdownContainer } from '@/components/markdown-container'
import { getAllNews, getNewsById } from '@/lib/news'

export default async function NewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const news = await getNewsById(id)
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-extrabold">{news.title}</h1>
      <MarkdownContainer markdown={news.content} />
    </div>
  )
}

export async function generateStaticParams() {
  const newsArticles = await getAllNews()
  return newsArticles.map((newsArticle) => ({ id: newsArticle.id }))
}
