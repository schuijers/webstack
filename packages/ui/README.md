# @schuijers/ui

A Vue 3 component library built with TypeScript, Reka UI, and Tailwind CSS.

## Installation

```bash
pnpm add @schuijers/ui
```

## Usage

### Import Styles

Import the component library styles in your application:

```typescript
import '@schuijers/ui/style.css'
```

### Using Components

```vue
<script setup lang="ts">
import { Button } from '@schuijers/ui'
</script>

<template>
  <Button variant="primary" size="md" @click="handleClick">
    Click me
  </Button>
</template>
```

## Development

### Install Dependencies

```bash
pnpm install
```

### Build

```bash
pnpm run build
```

### Run Tests

```bash
# Run tests once
pnpm run test

# Watch mode
pnpm run test:watch
```

### Type Check

```bash
pnpm run type-check
```

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Reka UI** - Unstyled, accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Fast unit test framework
- **Tsup** - TypeScript bundler

## License

MIT
