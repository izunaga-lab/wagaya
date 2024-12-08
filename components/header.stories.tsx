import { Meta, StoryObj } from '@storybook/react'

import Header from './header'

const meta = {
  title: 'components/Header',
  component: Header,
} satisfies Meta<typeof Header>

export default meta

type StoryFn = StoryObj<typeof meta>

export const Default: StoryFn = {}

export const HoverNavigation: StoryFn = {
  parameters: {
    pseudo: {
      hover: '#home-link',
    },
  },
}

export const Mobile: StoryFn = {
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
      isRotated: true,
    },
  },
}
