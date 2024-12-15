import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getLatestContents } from '#lib/content'
import MoreLink from '@/components/more-link'
import SectionTitle from '@/components/section-title'
import { basePath } from '@/lib/base-path'
import { sectionTitles } from '@/lib/section-title'
import { ContentType } from '@/types'

export default async function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">伊豆永洋一ゼミナール</h1>
        <p className="text-xl text-gray-600 mb-8">数理最適化と意思決定の科学を探求する</p>
        <div className="relative h-128 mb-8">
          <Image
            src={`${basePath}/research-image.png`}
            alt="オペレーションズリサーチのイメージ図"
            quality={100}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <SectionTitle title={sectionTitles.researchTheme.title} />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: '線形計画法と整数計画法', icon: '📊' },
            { title: 'ネットワーク最適化', icon: '🕸️' },
            { title: '確率的最適化', icon: '🎲' },
            { title: '機械学習とOR', icon: '🤖' },
          ].map((theme, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-4xl mb-4">{theme.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>
          ))}
        </div>
        <MoreLink path={sectionTitles.researchTheme.path} />
      </section>

      <section className="mb-16">
        <SectionTitle title={sectionTitles.news.title} />
        <div className="space-y-6">
          {getLatestContents(ContentType.NEWS, 5).then((news) =>
            news.map((news, index) => (
              <div key={index} className="flex items-start border-b border-dashed border-gray-200 pb-6">
                <Link
                  href={`${sectionTitles.news.path}/${news.id}`}
                  className="text-lg hover:underline flex items-center justify-between w-full"
                >
                  {news.title}
                  <ChevronRightIcon className="min-w-6 min-h-6 text-cyan-700 ml-2" />
                </Link>
              </div>
            )),
          )}
        </div>
        <MoreLink path={sectionTitles.news.path} />
      </section>

      <section>
        <SectionTitle title={sectionTitles.article.title} />
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative h-64 overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
            ></div>
          ))}
        </div>
        <MoreLink path={sectionTitles.article.path} />
      </section>
    </div>
  )
}
