import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-themes',
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    defaultName: 'Documentation',
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  stories: [
    // '../src/**/*.mdx',
    '../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  typescript: {
    check: false,
  },
}

export default config
