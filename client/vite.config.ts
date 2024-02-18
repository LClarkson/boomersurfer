import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/watch': 'http://localhost:3000', // Adjust the path and target URL accordingly
    },
  },
})
