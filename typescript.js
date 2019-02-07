module.exports = {
  extends: [
    require.resolve('.'),
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-unused-vars': [2, {ignoreRestSiblings: true}],
    'import/named': 0,
  },
}
