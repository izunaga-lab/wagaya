import { getAllContents, getContentById } from '#lib/content'
import { MarkdownContainer } from '@/components/markdown-container'

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const news = await getContentById('news', id)
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-extrabold">{news.title}</h1>
      <MarkdownContainer markdown={news.content} />
    </div>
  )
}

export async function generateStaticParams() {
  const newsArticles = await getAllContents('news')
  return newsArticles.map((newsArticle) => ({ id: newsArticle.id }))
}
