module.exports = {
  extends: [
    require.resolve('./javascript'),
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  rules: {
    // upgrade severity from warning to error
    '@typescript-eslint/explicit-function-return-type': [
      2,
      {allowExpressions: true, allowTypedFunctionExpressions: true},
    ],
    '@typescript-eslint/no-explicit-any': 2,

    // these are checked by the TS compiler
    '@typescript-eslint/no-unused-vars': 0,
    'import/named': 0,
    'no-undef': 0,
  },
}
