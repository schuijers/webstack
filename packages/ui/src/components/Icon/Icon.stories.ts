import type { Meta, StoryObj } from '@storybook/vue3'
import Icon from './Icon.vue'

/**
 * A component to display any icon from Iconify.
 */
const meta: Meta<typeof Icon> = {
  component: Icon,
  render: args => ({
    components: {
      Icon,
    },
    setup() {
      return {
        args,
      }
    },
    template: '<Icon v-bind="args" />',
  }),
}

type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {
  args: {
    name: 'mdi:home',
  },
}

export const Colors: Story = {
  args: {
    name: 'mdi:home',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icons inherit color from any applied Tailwind CSS text color utility.',
      },
    },
  },
  render: args => ({
    components: {
      Icon,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <div class="flex flex-wrap items-center gap-4">
        <Icon v-bind="args" class="text-red-500" />
        <Icon v-bind="args" class="text-yellow-500" />
        <Icon v-bind="args" class="text-green-500" />
        <Icon v-bind="args" class="text-blue-500" />
        <Icon v-bind="args" class="text-purple-500" />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  args: {
    name: 'mdi:home',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon size can be set via Tailwind CSS width (`w-*`), height (`h-*`), or `size-*` utilities.',
      },
    },
  },
  render: args => ({
    components: {
      Icon,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
      <div class="flex flex-wrap items-center gap-4">
        <Icon v-bind="args" class="size-4" />
        <Icon v-bind="args" class="size-8" />
        <Icon v-bind="args" class="size-12" />
        <Icon v-bind="args" class="size-16" />
        <Icon v-bind="args" class="size-20" />
      </div>
    `,
  }),
}
