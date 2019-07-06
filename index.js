module.exports = {
  extends: [
    require.resolve('./javascript'),
    'plugin:@typescript-eslint/eslint-recommended',
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
    'import/default': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
  },
}
