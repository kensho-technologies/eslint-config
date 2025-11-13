import js from '@eslint/js'
import query from '@tanstack/eslint-plugin-query'
import {defineConfig} from 'eslint/config'
import prettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import ts from 'typescript-eslint'

export default defineConfig(
  js.configs.recommended,
  ts.configs.recommended,
  query.configs['flat/recommended'],
  reactHooks.configs.flat['recommended-latest'],
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', {ignoreRestSiblings: true}],
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
  prettier,
)
