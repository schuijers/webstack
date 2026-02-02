import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { schuijers } from '@schuijers/eslint-config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default schuijers({
  typescript: {
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
          ignore: [/\.stories\.ts$/],
        },
      ],
    },
  },
})
