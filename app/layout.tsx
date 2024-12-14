import { Noto_Sans_JP } from 'next/font/google'

import type { Metadata } from 'next'

import Footer from '@/components/footer'
import Header from '@/components/header'

import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: '伊豆永ゼミ',
  description: '伊豆永ゼミのホームページです。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="container mx-auto px-4 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
