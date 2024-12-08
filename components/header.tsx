'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            伊豆永ゼミ
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="nav-link">
              ホーム
            </Link>
            <Link href="/research" className="nav-link">
              研究テーマ
            </Link>
            <Link href="/news" className="nav-link">
              お知らせ
            </Link>
            <Link href="/articles" className="nav-link">
              記事
            </Link>
            <Link href="/contact" className="nav-link">
              お問い合わせ
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 nav-link">
              ホーム
            </Link>
            <Link href="/research" className="block px-3 py-2 nav-link">
              研究テーマ
            </Link>
            <Link href="/news" className="block px-3 py-2 nav-link">
              お知らせ
            </Link>
            <Link href="/articles" className="block px-3 py-2 nav-link">
              記事
            </Link>
            <Link href="/contact" className="block px-3 py-2 nav-link">
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
