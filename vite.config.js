import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions: {
      external:[
        // '@chakra-ui/react',
        'react-redux',
        '@reduxjs/toolkit',
        'react-spring/web',
        '@chakra-ui/icons',
        "react-scroll",
        ],
    },
   
  }
})
