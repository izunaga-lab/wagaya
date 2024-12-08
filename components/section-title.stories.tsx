import { Meta, StoryObj } from '@storybook/react'

import meta from './header.stories'
import SectionTitle from './section-title'

export default {
  title: 'components/SectionTitle',
  component: SectionTitle,
} satisfies Meta<typeof SectionTitle>

type StoryFn = StoryObj<typeof meta>

export const Default: StoryFn = {
  args: {
    title: '研究テーマ',
  },
}
