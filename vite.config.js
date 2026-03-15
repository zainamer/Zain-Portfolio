import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base:'/Zain-Portfolio/',
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        text: "#0F172A",       // dark navy
        secondary: "#475569",  // steel gray
        accent: "#1E3A8A",     // deep blue
      },
    },
  },
})

