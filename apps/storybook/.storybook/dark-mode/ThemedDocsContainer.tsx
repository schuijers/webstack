import type { DocsContainerProps } from '@storybook/addon-docs/blocks'
import type { PropsWithChildren } from 'react'

import { DocsContainer } from '@storybook/addon-docs/blocks'
import { useDarkMode } from '@vueless/storybook-dark-mode'
import React from 'react'
import { themes } from 'storybook/theming'

export function ThemedDocsContainer({ children, context }: PropsWithChildren<DocsContainerProps>) {
  const isDarkMode = useDarkMode()

  return (
    <DocsContainer context={context} theme={isDarkMode ? themes.dark : themes.light}>
      {children}
    </DocsContainer>
  )
}
