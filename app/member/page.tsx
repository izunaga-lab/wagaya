import fs from 'fs'
import path from 'path'

import yaml from 'js-yaml'
import { GraduationCap, BookOpen } from 'lucide-react'

import { MemberList } from './_components/member-list'

import { Members } from '@/types/members'

export default async function MemberPage() {
  const filePath = path.join(process.cwd(), 'app/member/members.yml')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const members = yaml.load(fileContents) as Members

  return (
    <>
      {/* 学部課程セクション */}
      <div>
        <div className="flex items-center space-x-3 border-b-4 border-gray-300 pb-2">
          <BookOpen className="h-8 w-8" />
          <h2 className="text-2xl font-bold">学部課程</h2>
        </div>

        <div className="p-6">
          <MemberList title="3年生" members={members.bachelor.third_year} />
          <MemberList title="4年生" members={members.bachelor.fourth_year} />
        </div>
      </div>

      {/* 修士課程セクション */}
      <div>
        <div className="flex items-center space-x-3 border-b-4 border-gray-300 pb-2">
          <GraduationCap className="h-8 w-8" />
          <h2 className="text-2xl font-bold">修士課程</h2>
        </div>

        <div className="p-6">
          <MemberList title="1年生" members={members.master.first_year} />
          <MemberList title="2年生" members={members.master.second_year} />
        </div>
      </div>
    </>
  )
}
