import { Meta, StoryObj } from '@storybook/react'

import MoreLink from './more-link'

const meta = {
  title: 'components/MoreLink',
  component: MoreLink,
} satisfies Meta<typeof MoreLink>

export default meta
type StoryFn = StoryObj<typeof meta>

export const Default: StoryFn = {
  args: {
    path: '/research',
  },
}

export const Hover: StoryFn = {
  args: {
    path: '/research',
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}
