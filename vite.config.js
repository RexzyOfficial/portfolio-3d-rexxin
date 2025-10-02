import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  optimizeDeps: {
    include: [
      'three',
      'three/examples/jsm/loaders/GLTFLoader',
      '@react-three/fiber',
      '@react-three/drei'
    ]
  },

  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false
  },

  server: {
    port: 5173,
    host: true
  },

  base: './'
})
