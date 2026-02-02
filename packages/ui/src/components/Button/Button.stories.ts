import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

/**
 * Button component built with Reka UI primitives and Tailwind CSS.
 *
 * Supports multiple variants, sizes, and states including loading and disabled.
 * The component is fully accessible and can be used polymorphically with the `asChild` prop.
 */
const meta = {
  args: {
    asChild: false,
    disabled: false,
    loading: false,
    size: 'md',
    variant: 'primary',
  },
  argTypes: {
    asChild: {
      control: 'boolean',
      description: 'When true, renders the slot content directly instead of a button element',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state (shows spinner)',
      table: {
        defaultValue: {
          summary: false,
        },
        type: { summary: 'boolean' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Emitted when the button is clicked (not emitted when disabled or loading)',
      table: {
        type: { summary: '(event: MouseEvent) => void' },
      },
    },
    size: {
      control: 'select',
      description: 'The size of the button',
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      description: 'The visual style variant of the button',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
  },
  component: Button,
  title: 'Components/Button',
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export default meta

/**
 * The default button with primary styling
 */
export const Default: Story = {
  render: args => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
}

/**
 * All button variants showcased together
 */
export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The button comes in five variants: primary, secondary, outline, ghost, and danger.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    `,
  }),
}

/**
 * All button sizes showcased together
 */
export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Buttons are available in three sizes: small (sm), medium (md), and large (lg).',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
}

/**
 * Disabled button state
 */
export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons cannot be clicked and have reduced opacity.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button variant="primary" :disabled="true">Primary Disabled</Button>
        <Button variant="secondary" :disabled="true">Secondary Disabled</Button>
        <Button variant="outline" :disabled="true">Outline Disabled</Button>
        <Button variant="ghost" :disabled="true">Ghost Disabled</Button>
        <Button variant="danger" :disabled="true">Danger Disabled</Button>
      </div>
    `,
  }),
}

/**
 * Loading button state with spinner
 */
export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading buttons display a spinner and are automatically disabled.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button variant="primary" :loading="true">Loading...</Button>
        <Button variant="secondary" :loading="true">Processing</Button>
        <Button variant="outline" :loading="true">Please wait</Button>
        <Button variant="danger" :loading="true">Deleting...</Button>
      </div>
    `,
  }),
}

/**
 * All variants in small size
 */
export const SmallVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-3">
        <Button variant="primary" size="sm">Primary</Button>
        <Button variant="secondary" size="sm">Secondary</Button>
        <Button variant="outline" size="sm">Outline</Button>
        <Button variant="ghost" size="sm">Ghost</Button>
        <Button variant="danger" size="sm">Danger</Button>
      </div>
    `,
  }),
}

/**
 * All variants in large size
 */
export const LargeVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button variant="primary" size="lg">Primary</Button>
        <Button variant="secondary" size="lg">Secondary</Button>
        <Button variant="outline" size="lg">Outline</Button>
        <Button variant="ghost" size="lg">Ghost</Button>
        <Button variant="danger" size="lg">Danger</Button>
      </div>
    `,
  }),
}

/**
 * Buttons with icons (using emoji as placeholder)
 */
export const WithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Buttons can contain icons alongside text by adding content to the default slot.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button variant="primary">
          <span class="mr-2">✓</span>
          Save Changes
        </Button>
        <Button variant="secondary">
          <span class="mr-2">✕</span>
          Cancel
        </Button>
        <Button variant="outline">
          <span class="mr-2">⚙</span>
          Settings
        </Button>
        <Button variant="danger">
          <span class="mr-2">🗑</span>
          Delete
        </Button>
      </div>
    `,
  }),
}

/**
 * Interactive playground to test all props
 */
export const Playground: Story = {
  args: {
    disabled: false,
    loading: false,
    size: 'md',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interactively test all button props.',
      },
    },
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Click me</Button>',
  }),
}

/**
 * Full state matrix showing all combinations
 */
export const StateMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive view of all button variants in different states.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4 dark:text-white">Normal State</h3>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4 dark:text-white">Disabled State</h3>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary" :disabled="true">Primary</Button>
            <Button variant="secondary" :disabled="true">Secondary</Button>
            <Button variant="outline" :disabled="true">Outline</Button>
            <Button variant="ghost" :disabled="true">Ghost</Button>
            <Button variant="danger" :disabled="true">Danger</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4 dark:text-white">Loading State</h3>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary" :loading="true">Primary</Button>
            <Button variant="secondary" :loading="true">Secondary</Button>
            <Button variant="outline" :loading="true">Outline</Button>
            <Button variant="ghost" :loading="true">Ghost</Button>
            <Button variant="danger" :loading="true">Danger</Button>
          </div>
        </div>
      </div>
    `,
  }),
}

/**
 * Responsive button group example
 */
export const ButtonGroup: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be grouped together for related actions.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="inline-flex rounded-lg shadow-sm" role="group">
        <Button variant="outline" class="rounded-r-none border-r-0">Left</Button>
        <Button variant="outline" class="rounded-none border-r-0">Middle</Button>
        <Button variant="outline" class="rounded-l-none">Right</Button>
      </div>
    `,
  }),
}
