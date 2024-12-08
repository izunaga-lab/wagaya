import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import type { Preview } from '@storybook/react'
import '@/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'reset',
    },
  },
}

export default preview
