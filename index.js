import js from '@eslint/js'
import ts from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import query from '@tanstack/eslint-plugin-query'
import reactHooks from 'eslint-plugin-react-hooks'

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...query.configs['flat/recommended'],
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', {ignoreRestSiblings: true}],
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
  prettier,
)
