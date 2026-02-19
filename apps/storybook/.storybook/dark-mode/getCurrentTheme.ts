const SB_THEMES_KEY = 'sb-addon-themes-3'

export function getCurrentTheme(): 'dark' | 'light' {
  // eslint-disable-next-line n/no-unsupported-features/node-builtins -- Client-side code, so localStorage is available
  const stored = localStorage.getItem(SB_THEMES_KEY)

  const isDark = stored
    ? JSON.parse(stored).current === 'dark'
    : globalThis.matchMedia('(prefers-color-scheme: dark)').matches

  return isDark ? 'dark' : 'light'
}
