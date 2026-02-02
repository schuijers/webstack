import type { Preview } from '@storybook/vue3'
import { withThemeByClassName } from '@storybook/addon-themes'
import { setup } from '@storybook/vue3'

// import '@schuijers/ui/style.css'
import './tailwind.css'

// Configure Vue 3 app
setup(() => {
  // You can configure Vue plugins here if needed
})

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      defaultTheme: 'light',
      themes: {
        dark: 'dark',
        light: 'light',
      },
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
}

export default preview
