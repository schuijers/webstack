import tailwindcss from '@tailwindcss/vite'
import vuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    ...tailwindcss(),
    vuePlugin(),
  ],
})
