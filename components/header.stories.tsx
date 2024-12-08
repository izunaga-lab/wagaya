import { Meta, StoryObj } from '@storybook/react'

import Header from './header'

const meta = {
  title: 'components/Header',
  component: Header,
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const HoverNavigation: Story = {
  parameters: {
    pseudo: {
      hover: '#home-link',
    },
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
      isRotated: true,
    },
  },
}
