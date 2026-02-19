import type { Preview } from '@storybook/vue3'

import { themes } from 'storybook/theming'
import { getCurrentTheme, ThemedDocsContainer } from './dark-mode'

import './preview.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      classTarget: 'html',
      current: getCurrentTheme(),
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
    },
    docs: {
      container: ThemedDocsContainer,
      theme: themes[getCurrentTheme()],
      toc: true,
    },
  },
  tags: ['autodocs'],
}

export default preview
