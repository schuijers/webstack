import vuePlugin from '@vitejs/plugin-vue'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    'src/index',
    {
      builder: 'mkdist',
      input: 'src/styles/',
      outDir: 'dist/styles',
      pattern: ['**/*.css'],
    },
  ],
  externals: ['vue', 'reka-ui'],
  hooks: {
    'rollup:options': (_ctx, options) => {
      if (Array.isArray(options.plugins)) {
        options.plugins.push(vuePlugin())
      }
    },
  },
  rollup: {
    emitCJS: true,
    esbuild: {
      target: 'es2022',
    },
  },
})
