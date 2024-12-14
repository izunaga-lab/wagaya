import { getAllNewsIds } from '@/lib/news'

export default async function NewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <div>NewsPage: {id}</div>
}

export async function generateStaticParams() {
  const newsIds = await getAllNewsIds()
  return newsIds.map((newsId) => ({ id: newsId.id }))
}
