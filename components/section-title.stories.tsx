import { Meta, StoryObj } from '@storybook/react'

import meta from './header.stories'
import SectionTitle from './section-title'

export default {
  title: 'components/SectionTitle',
  component: SectionTitle,
} satisfies Meta<typeof SectionTitle>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '研究テーマ',
  },
}
