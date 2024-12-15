import { Meta, StoryObj } from '@storybook/react'

import Footer from './footer'

const meta = {
  title: 'components/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>

export default meta

type StoryFn = StoryObj<typeof meta>

export const Default: StoryFn = {}
