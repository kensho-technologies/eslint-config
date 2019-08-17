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
    '@typescript-eslint/no-non-null-assertion': 2,

    // these are checked by the TS compiler
    '@typescript-eslint/no-unused-vars': 0,
    'import/default': 0,
    'import/named': 0,
    'import/namespace': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-no-undef': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,

    // allow ts-ignore comments
    '@typescript-eslint/ban-ts-ignore': 0,

    // prefer T[] style of arrays
    '@typescript-eslint/array-type': 2,
  },
}
