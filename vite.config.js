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
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          const ext = assetInfo.name?.split('.').pop()

          if (ext === 'css') {
            return 'src/styles/[name]-[hash][extname]'
          }

          if (['woff', 'woff2', 'ttf', 'otf', 'eot'].includes(ext)) {
            return 'src/assets/fonts/[name]-[hash][extname]'
          }

          if (
            ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif'].includes(ext)
          ) {
            return 'src/assets/images/[name]-[hash][extname]'
          }

          return 'src/[name]-[hash][extname]'
        },
        chunkFileNames: 'src/scripts/[name]-[hash].js',
        entryFileNames: 'src/scripts/[name]-[hash].js'
      }
    }
  }
})
