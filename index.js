import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'

const configs = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
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

export default configs
