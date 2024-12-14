'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { basePath } from '@/lib/base-path'
import { sectionTitles } from '@/lib/section-title'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b-2 shadow-sm border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image src={`${basePath}/logo.png`} alt="伊豆永ゼミ" width={100} height={100} />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href={sectionTitles.home.path} className="nav-link" id="home-link">
              {sectionTitles.home.title}
            </Link>
            <Link href={sectionTitles.researchTheme.path} className="nav-link" id="research-link">
              研究テーマ
            </Link>
            <Link href={sectionTitles.news.path} className="nav-link" id="news-link">
              {sectionTitles.news.title}
            </Link>
            <Link href={sectionTitles.article.path} className="nav-link" id="articles-link">
              記事
            </Link>
            <Link href={sectionTitles.contact.path} className="nav-link" id="contact-link">
              {sectionTitles.contact.title}
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
            <Link href={sectionTitles.home.path} className="block px-3 py-2 nav-link">
              {sectionTitles.home.title}
            </Link>
            <Link href={sectionTitles.researchTheme.path} className="block px-3 py-2 nav-link">
              {sectionTitles.researchTheme.title}
            </Link>
            <Link href={sectionTitles.news.path} className="block px-3 py-2 nav-link">
              {sectionTitles.news.title}
            </Link>
            <Link href={sectionTitles.article.path} className="block px-3 py-2 nav-link">
              {sectionTitles.article.title}
            </Link>
            <Link href={sectionTitles.contact.path} className="block px-3 py-2 nav-link">
              {sectionTitles.contact.title}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
