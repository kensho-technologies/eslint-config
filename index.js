module.exports = {
  extends: [
    require.resolve('./javascript'),
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
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
    // upgrade severity from warning to error
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/no-explicit-any': 2,

    // these are checked by the TS compiler
    '@typescript-eslint/no-unused-vars': 0,
    'import/named': 0,
    'no-undef': 0,
  },
}
