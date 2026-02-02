# Schuijers Webstack - Storybook

Component library documentation and development environment for the Schuijers Webstack.

## Getting Started

### Development

Run Storybook in development mode:

```bash
pnpm dev
```

This will start Storybook on `http://localhost:6006`

### Build

Build Storybook for production:

```bash
pnpm build
```

The static files will be generated in the `storybook-static` directory.

## Features

- 📚 **Component Documentation**: Comprehensive documentation for all components
- 🎨 **Visual Testing**: Interactive playground for testing component variations
- 🌓 **Dark Mode**: Toggle between light and dark themes
- ⚡ **Fast Development**: Hot module replacement for instant updates
- 📖 **MDX Support**: Write rich documentation with MDX
- 🎯 **TypeScript**: Full type safety

## Configuration

Storybook is configured to work with:

- Vue 3
- TypeScript
- Tailwind CSS
- Vite

Configuration files:

- `.storybook/main.ts` - Main Storybook configuration
- `.storybook/preview.ts` - Global decorators and parameters
- `.storybook/tailwind.css` - Tailwind CSS configuration

## Writing Stories

Stories are written in TypeScript and follow the Component Story Format (CSF) 3.0:

```typescript
import type { Meta, StoryObj } from '@storybook/vue3'
import { MyComponent } from '@schuijers/ui'

const meta = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // component props
  },
}
```

## Dark Mode

Dark mode is implemented using Tailwind's class-based dark mode strategy. Toggle between light and dark themes using the
theme switcher in the Storybook toolbar.

Components automatically adapt to the selected theme using Tailwind's `dark:` prefix.
