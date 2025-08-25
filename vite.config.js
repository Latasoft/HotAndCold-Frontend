import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Usa el puerto asignado por Render
    host: '0.0.0.0', // Escucha en todas las interfaces de red
    preview: {
      allowedHosts: ['hotandcold.onrender.com'], // Permite el dominio de Render
    },
  },
})
