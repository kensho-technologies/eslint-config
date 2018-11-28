module.exports = {
  extends: ['kensho'],
  plugins: ['typescript'],
  parser: 'typescript-eslint-parser',
  rules: {
    // Prevent TypeScript-specific constructs from being erroneously flagged as unused
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-unused-vars.md
    'typescript/no-unused-vars': 'error',
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    },
  },
}
