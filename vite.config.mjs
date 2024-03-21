import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    testTimeout: 70000,
    globals: true,
    "setupFiles": [
      "./setupVitest.mjs"
    ],
  },
})
