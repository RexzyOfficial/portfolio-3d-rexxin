import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  
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
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber'],
          'drei-vendor': ['@react-three/drei']
        }
      }
    }
  },

  server: {
    port: 5173,
    host: true
  },

  base: './'
})