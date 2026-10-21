import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the build works both from a domain root and from a
  // sub-path such as https://<user>.github.io/ali-ahmed-portfolio/
  base: './',
})
