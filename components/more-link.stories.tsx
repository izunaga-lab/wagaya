import { Meta, StoryObj } from '@storybook/react'

import meta from './header.stories'
import MoreLink from './more-link'

export default {
  title: 'components/MoreLink',
  component: MoreLink,
} satisfies Meta<typeof MoreLink>

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
