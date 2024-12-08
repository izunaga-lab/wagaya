import { Meta, StoryObj } from '@storybook/react'

import Footer from './footer'
import meta from './header.stories'

export default {
  title: 'components/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>

type Story = StoryObj<typeof meta>

export const Default: Story = {}
