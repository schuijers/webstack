import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from './Button.vue'

describe('Button component', () => {
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      const wrapper = mount(Button, {
        slots: {
          default: 'Click me',
        },
      })

      expect(wrapper.text()).toBe('Click me')
      expect(wrapper.find('button').exists()).toBe(true)
    })

    it('renders with custom text', () => {
      const wrapper = mount(Button, {
        slots: {
          default: 'Custom Button Text',
        },
      })

      expect(wrapper.text()).toBe('Custom Button Text')
    })

    it('renders loading spinner when loading prop is true', () => {
      const wrapper = mount(Button, {
        props: {
          loading: true,
        },
        slots: {
          default: 'Loading',
        },
      })

      const spinner = wrapper.find('.animate-spin')

      expect(spinner.exists()).toBe(true)
    })
  })

  describe('Variants', () => {
    it('applies primary variant classes by default', () => {
      const wrapper = mount(Button)
      const button = wrapper.find('button')

      expect(button.classes()).toContain('bg-blue-600')
      expect(button.classes()).toContain('text-white')
    })

    it('applies secondary variant classes', () => {
      const wrapper = mount(Button, {
        props: {
          variant: 'secondary',
        },
      })
      const button = wrapper.find('button')

      expect(button.classes()).toContain('bg-gray-600')
    })

    it('applies outline variant classes', () => {
      const wrapper = mount(Button, {
        props: {
          variant: 'outline',
        },
      })
      const button = wrapper.find('button')

      expect(button.classes()).toContain('border-2')
      expect(button.classes()).toContain('bg-transparent')
    })

    it('applies ghost variant classes', () => {
      const wrapper = mount(Button, {
        props: {
          variant: 'ghost',
        },
      })
      const button = wrapper.find('button')

      expect(button.classes()).toContain('bg-transparent')
    })

    it('applies danger variant classes', () => {
      const wrapper = mount(Button, {
        props: {
          variant: 'danger',
        },
      })
      const button = wrapper.find('button')

      expect(button.classes()).toContain('bg-red-600')
    })
  })

  describe('Sizes', () => {
    it('applies medium size classes by default', () => {
      const wrapper = mount(Button)
      const button = wrapper.find('button')

      expect(button.classes()).toContain('h-10')
      expect(button.classes()).toContain('px-4')
    })

    it('applies small size classes', () => {
      const wrapper = mount(Button, {
        props: {
          size: 'sm',
        },
      })
      const button = wrapper.find('button')

      expect(button.classes()).toContain('h-8')
      expect(button.classes()).toContain('px-3')
    })

    it('applies large size classes', () => {
      const wrapper = mount(Button, {
        props: {
          size: 'lg',
        },
      })
      const button = wrapper.find('button')

      expect(button.classes()).toContain('h-12')
      expect(button.classes()).toContain('px-6')
    })
  })

  describe('Disabled State', () => {
    it('is disabled when disabled prop is true', () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true,
        },
      })
      const button = wrapper.find('button')

      expect(button.attributes('disabled')).toBeDefined()
    })

    it('does not emit click event when disabled', async () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true,
        },
      })

      await wrapper.trigger('click')

      expect(wrapper.emitted('click')).toBeUndefined()
    })

    it('applies opacity class when disabled', () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true,
        },
      })
      const button = wrapper.find('button')

      expect(button.classes()).toContain('disabled:opacity-50')
    })
  })

  describe('Loading State', () => {
    it('is disabled when loading prop is true', () => {
      const wrapper = mount(Button, {
        props: {
          loading: true,
        },
      })
      const button = wrapper.find('button')

      expect(button.attributes('disabled')).toBeDefined()
    })

    it('does not emit click event when loading', async () => {
      const wrapper = mount(Button, {
        props: {
          loading: true,
        },
      })

      await wrapper.trigger('click')

      expect(wrapper.emitted('click')).toBeUndefined()
    })
  })

  describe('Events', () => {
    it('emits click event when clicked', async () => {
      const wrapper = mount(Button)

      await wrapper.trigger('click')

      expect(wrapper.emitted('click')).toHaveLength(1)
    })

    it('passes mouse event to click handler', async () => {
      const wrapper = mount(Button)

      await wrapper.trigger('click')

      const clickEvents = wrapper.emitted('click')

      expect(clickEvents?.[0]?.[0]).toBeInstanceOf(MouseEvent)
    })

    it('does not emit click when disabled', async () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true,
        },
      })

      await wrapper.trigger('click')

      expect(wrapper.emitted('click')).toBeUndefined()
    })
  })

  describe('AsChild', () => {
    it('renders as slot when asChild is true', () => {
      const wrapper = mount(Button, {
        props: {
          asChild: true,
        },
        slots: {
          default: '<a href="#">Link</a>',
        },
      })

      // When asChild is true, Primitive renders the slot content directly
      expect(wrapper.html()).toContain('Link')
    })
  })

  describe('Accessibility', () => {
    it('has type="button" attribute', () => {
      const wrapper = mount(Button)
      const button = wrapper.find('button')

      expect(button.attributes('type')).toBe('button')
    })

    it('includes focus-visible ring classes', () => {
      const wrapper = mount(Button)
      const button = wrapper.find('button')

      expect(button.classes()).toContain('focus-visible:ring-2')
      expect(button.classes()).toContain('focus-visible:ring-offset-2')
    })
  })
})
