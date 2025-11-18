import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0', // Permite el acceso desde la red de Windows/host
    port: 5173      // O el puerto que esté usando Vite (generalmente 5173)
  }
})
