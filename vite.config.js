import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions: {
      external:[
        'react',
        '@chakra-ui/react',
        'react-dom',
        'react-redux',
        '@reduxjs/toolkit',
        'react-spring/web',
        ],
    },
   
  }
})
