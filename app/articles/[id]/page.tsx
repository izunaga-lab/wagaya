import { getAllContents, getContentById } from '#lib/content'
import { MarkdownContainer } from '@/components/markdown-container'
import { ContentType } from '@/types'

export default async function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = await getContentById(ContentType.ARTICLE, id)
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-extrabold">{article.title}</h1>
      <MarkdownContainer markdown={article.content} />
    </div>
  )
}

export async function generateStaticParams() {
  const articles = await getAllContents(ContentType.ARTICLE)
  return articles.map((article) => ({ id: article.id }))
}
