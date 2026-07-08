import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      easydnd: new URL('./src', import.meta.url).pathname,
    },
  },
})
