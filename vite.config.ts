import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    tailwindcss(),
    svgrPlugin()
  ],
})