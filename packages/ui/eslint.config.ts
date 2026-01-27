import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { schuijers } from '@schuijers/eslint-config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default schuijers({
  typescript: {
    overrides: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
  },
  unicorn: {
    overrides: {
      'unicorn/filename-case': [
        'error', {
          case: 'kebabCase',
          ignore: [
            /\.spec\.ts$/,
            /\.test\.ts$/,
            /\.types\.ts$/,
            /\.vue$/,
          ],
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  vue: {
    overrides: {
      'vue/multi-word-component-names': 'off',
    },
  },
})
