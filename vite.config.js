import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue3 from '@vitejs/plugin-vue'
import istanbul from 'vite-plugin-istanbul'
import path from 'path'

import { commonProxy } from './config/proxy-config'

function resolve (dir) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env = { ...process.env, ...env }

  const isNoMock = process.env.NODE_ENV === 'development' && process.env.MOCK_ENV === 'false'
  const prod = process.env.NODE_ENV === 'production'

  return {
    plugins: [
      vue3(),
      legacy({
        targets: ['chrome 39'],
      }),
      istanbul()
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url))
        },
        {
          find: '@api-mock',
          replacement: isNoMock || prod ? resolve('src/empty') : resolve('src/api-mock')
        },
        {
          find: /~(.+)/,
          replacement: fileURLToPath(new URL('./node_modules/$1', import.meta.url))
        }
      ]
    },
    server: {
      host: 'localhost',
      port: 8080,
      disableHostCheck: true,
      proxy: isNoMock ? commonProxy : null
    },
    build: {
      assetsDir: 'static',
      sourcemap: true,
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name].[hash].js',
          entryFileNames: 'static/[name].[hash].js',
          
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'static/img/[name].[hash][extname]'
            }
            
            if (/\.css$/.test(name ?? '')) {
              return 'static/[name].[hash][extname]'
            }

            if (/\.(ttf|woff2)$/.test(name ?? '')) {
              return 'static/fonts/[name]-[hash][extname]'
            }
    
            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'static/[name].[hash][extname]'
          }
        }
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      clearMocks: true,
      include: ['tests/specs/**'],
      coverage: {
        all: true,
        enabled: true,
        provider: 'istanbul',
        reporter: ['lcov', 'text', 'json'],
        reportsDirectory: "./tests/coverage",
        include: [
          // List of files included from coverage
          'src/App.vue',
          'src/api/**/*.js',
          'src/stores/*.js',
          'src/utils/**/*.js',
          'src/components/**',
          'src/pages/**',
        ]
      }
    }
  }
})
