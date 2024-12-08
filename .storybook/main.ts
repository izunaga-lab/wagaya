import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['./introduction.mdx', '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    'storybook-addon-pseudo-states',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['..\\public'],
}
export default config
