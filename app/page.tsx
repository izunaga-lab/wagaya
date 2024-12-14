import Image from 'next/image'
import Link from 'next/link'

import SectionTitle from '@/components/section-title'
import { basePath } from '@/lib/base-path'

export default function Home() {
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
        <SectionTitle title="研究テーマ" />
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
        <div className="text-center mt-8">
          <Link
            href="/research"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            研究テーマの詳細を見る
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <SectionTitle title="最新のニュース" />
        <div className="space-y-6">
          {[
            { date: '2023/06/15', title: '国際会議INFORMS 2023での研究発表が採択されました' },
            { date: '2023/05/20', title: '新しい最適化アルゴリズムの論文がJournal of ORに掲載されました' },
            { date: '2023/04/01', title: '2023年度の新入生歓迎会を開催しました' },
          ].map((news, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-24 text-gray-500">{news.date}</div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{news.title}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="研究室の様子" />
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative h-64 overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
            ></div>
          ))}
        </div>
      </section>
    </div>
  )
}
