<template>
  <Icon :icon="name" />
</template>

<script setup lang="ts">
import type { IconProps } from './Icon.types'

import { Icon } from '@iconify/vue'

defineOptions({
  name: 'UiIcon',
})

defineProps<IconProps>()
</script>
