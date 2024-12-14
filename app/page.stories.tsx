import { Meta, StoryObj } from '@storybook/react'

import Home from './page'

const meta = {
  title: 'app/home',
  component: Home,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Home>

export default meta

type StoryFn = StoryObj<typeof meta>

export const Default: StoryFn = {}
