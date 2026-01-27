<template>
  <Primitive
    :as="asChild ? 'slot' : 'button'"
    :as-child="asChild"
    :class="buttonClasses"
    :disabled="disabled || loading"
    type="button"
    @click="handleClick"
  >
    <span
      v-if="loading"
      class="
        mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"
    />

    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import type { ButtonProps, ButtonSize, ButtonVariant } from './Button.types'

import { Primitive } from 'reka-ui'
import { computed } from 'vue'

const properties = withDefaults(defineProps<ButtonProps>(), {
  asChild: false,
  disabled: false,
  loading: false,
  size: 'md',
  variant: 'primary',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

defineSlots<{
  default?: () => any
}>()

const baseClasses
  = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md'

const variantClasses = computed(() => {
  const variants: Record<ButtonVariant, string> = {
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
    ghost: 'bg-transparent hover:bg-gray-100 focus-visible:ring-gray-600',
    outline:
      'border-2 border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-600',
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
    secondary:
      'bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-600',
  }
  return variants[properties.variant]
})

const sizeClasses = computed(() => {
  const sizes: Record<ButtonSize, string> = {
    lg: 'h-12 px-6 text-lg',
    md: 'h-10 px-4 text-base',
    sm: 'h-8 px-3 text-sm',
  }
  return sizes[properties.size]
})

const buttonClasses = computed(() => {
  return [baseClasses, variantClasses.value, sizeClasses.value].join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!properties.disabled && !properties.loading) {
    emit('click', event)
  }
}
</script>
