import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
/** Se define la configuración de react y tailwindcss **/
export default defineConfig(
{
  plugins: [
    react(),
    tailwindcss(),
  ],
})
