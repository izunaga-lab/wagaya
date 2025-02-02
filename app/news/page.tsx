import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

import { getAllContents } from '#lib/content'
import { sectionTitles } from '@/lib/section-title'
import { ContentType } from '@/types'

export default async function NewsPage() {
  const news = await getAllContents(ContentType.NEWS)
  return (
    <>
      {news.map((news) => (
        <div key={news.id} className="flex items-start border-b border-dashed border-gray-200 pb-6">
          <Link
            href={`${sectionTitles.news.path}/${news.id}`}
            className="text-lg hover:underline flex items-center justify-between w-full"
          >
            {news.date.toLocaleDateString('ja-JP')} {news.title}
            <ChevronRightIcon className="min-w-6 min-h-6 text-cyan-700 ml-2" />
          </Link>
        </div>
      ))}
    </>
  )
}
