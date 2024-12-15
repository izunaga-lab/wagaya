import { Meta, StoryObj } from '@storybook/react'

import SectionTitle from './section-title'

const meta = {
  title: 'components/SectionTitle',
  component: SectionTitle,
} satisfies Meta<typeof SectionTitle>

export default meta

type StoryFn = StoryObj<typeof meta>

export const Default: StoryFn = {
  args: {
    title: '研究テーマ',
  },
}
