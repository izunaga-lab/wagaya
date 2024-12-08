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
            OR研究ゼミ
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              ホーム
            </Link>
            <Link href="/research" className="text-gray-600 hover:text-gray-900 transition-colors">
              研究テーマ
            </Link>
            <Link href="/members" className="text-gray-600 hover:text-gray-900 transition-colors">
              メンバー
            </Link>
            <Link href="/publications" className="text-gray-600 hover:text-gray-900 transition-colors">
              出版物
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
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
            <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              ホーム
            </Link>
            <Link href="/research" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              研究テーマ
            </Link>
            <Link href="/members" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              メンバー
            </Link>
            <Link href="/publications" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              出版物
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
