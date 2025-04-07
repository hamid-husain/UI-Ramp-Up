import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import unicornPlugin from 'eslint-plugin-unicorn'
import compatPlugin from 'eslint-plugin-compat'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      js,
      import: importPlugin,
      unicorn: unicornPlugin,
      compat: compatPlugin,
      prettier: prettierPlugin
    },
    rules: {
      'unicorn/prefer-modern-dom-apis': 'warn',
      'unicorn/no-array-reduce': 'off',
      'import/no-unresolved': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never'
        }
      ],
      'prettier/prettier': 'error',
      'compat/compat': 'warn'
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss']
        }
      }
    }
  }
])
