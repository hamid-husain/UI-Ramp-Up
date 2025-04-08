import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 75
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ],

  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['src']
      }
    },
    postcss: {
      plugins: [autoprefixer()]
    }
  },

  resolve: {
    alias: {
      '@': '/src'
    }
  },

  server: {
    port: 3000,
    open: true
  },

  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
