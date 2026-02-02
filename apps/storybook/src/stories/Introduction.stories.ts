import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  parameters: {
    layout: 'centered',
  },
  title: 'Welcome',
} satisfies Meta

type Story = StoryObj<typeof meta>

export default meta

export const Introduction: Story = {
  render: () => ({
    template: `
      <div class="max-w-3xl p-8">
        <h1 class="text-4xl font-bold mb-6 dark:text-white">
          Welcome to Schuijers Webstack
        </h1>
        
        <p class="text-lg mb-6 dark:text-gray-300">
          A modular Vue 3 component library built with TypeScript, Reka UI, and Tailwind CSS.
        </p>
        
        <div class="space-y-4 mb-8">
          <div class="border-l-4 border-blue-600 pl-4 py-2 dark:border-blue-400">
            <h2 class="text-xl font-semibold mb-2 dark:text-white">🎨 Modern Design System</h2>
            <p class="text-gray-700 dark:text-gray-300">
              Built on Tailwind CSS with support for light and dark modes. Use the theme toggle in the toolbar to switch themes.
            </p>
          </div>
          
          <div class="border-l-4 border-green-600 pl-4 py-2 dark:border-green-400">
            <h2 class="text-xl font-semibold mb-2 dark:text-white">♿ Accessibility First</h2>
            <p class="text-gray-700 dark:text-gray-300">
              All components are built with Reka UI primitives, ensuring WCAG compliance and keyboard navigation.
            </p>
          </div>
          
          <div class="border-l-4 border-purple-600 pl-4 py-2 dark:border-purple-400">
            <h2 class="text-xl font-semibold mb-2 dark:text-white">🎯 TypeScript Support</h2>
            <p class="text-gray-700 dark:text-gray-300">
              Full type safety with comprehensive TypeScript definitions for all components.
            </p>
          </div>
          
          <div class="border-l-4 border-orange-600 pl-4 py-2 dark:border-orange-400">
            <h2 class="text-xl font-semibold mb-2 dark:text-white">⚡ Developer Experience</h2>
            <p class="text-gray-700 dark:text-gray-300">
              Interactive documentation with live examples, controls, and code snippets.
            </p>
          </div>
        </div>
        
        <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-3 dark:text-white">Getting Started</h3>
          <div class="space-y-2">
            <p class="text-sm dark:text-gray-300">
              <strong>1.</strong> Browse components in the sidebar
            </p>
            <p class="text-sm dark:text-gray-300">
              <strong>2.</strong> Use the theme toggle to test dark mode
            </p>
            <p class="text-sm dark:text-gray-300">
              <strong>3.</strong> Interact with controls to customize components
            </p>
            <p class="text-sm dark:text-gray-300">
              <strong>4.</strong> View documentation for props, events, and examples
            </p>
          </div>
        </div>
      </div>
    `,
  }),
}
