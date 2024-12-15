import { Meta, StoryObj } from '@storybook/react'

import { PageHeadingArea } from './page-heading-area'

const meta = {
  title: 'components/PageHeadingArea',
  component: PageHeadingArea,
} satisfies Meta<typeof PageHeadingArea>

export default meta

type StoryFn = StoryObj<typeof meta>

export const Default: StoryFn = {
  args: {
    title: 'お知らせ',
    iconName: 'info',
  },
}
