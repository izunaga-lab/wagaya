import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

import { getAllNews } from '@/lib/news'
import { sectionTitles } from '@/lib/section-title'

export default async function NewsPage() {
  const news = await getAllNews()
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        {news.map((news) => (
          <div key={news.id} className="flex items-start border-b border-dashed border-gray-200 pb-6">
            <Link
              href={`${sectionTitles.news.path}/${news.id}`}
              className="text-lg hover:underline flex items-center justify-between w-full"
            >
              {news.title}
              <ChevronRightIcon className="min-w-6 min-h-6 text-cyan-700 ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
