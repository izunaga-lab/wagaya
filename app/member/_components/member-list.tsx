import React from 'react'

import { Member } from '@/types/members'

interface MemberListProps {
  title: string
  members: Member[]
}

export function MemberList({ title, members }: MemberListProps) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <ul className="space-y-2">
        {members.map((member) => (
          <li key={member.name} className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="text-lg">{member.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
