import { Meta, StoryObj } from '@storybook/react'

import { MemberList } from './member-list'

const meta = {
  title: 'app/member/_components/MemberList',
  component: MemberList,
} satisfies Meta<typeof MemberList>

export default meta

type StoryFn = StoryObj<typeof meta>

export const Default: StoryFn = {
  args: {
    title: '3年生',
    members: [
      {
        name: '山田太郎',
      },
      {
        name: '佐藤花子',
      },
      {
        name: '鈴木次郎',
      },
    ],
  },
}
