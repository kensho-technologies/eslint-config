module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:import/typescript', 'prettier', 'prettier/react'],
  plugins: ['jsdoc'],
  parser: 'babel-eslint',
  env: {
    // allow browser globals
    browser: true,
  },
  rules: {
    // https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
    'arrow-body-style': [2, 'as-needed', {requireReturnForObjectLiteral: false}],

    // ensure that default, named, and namespaced imports have been exported by the target file
    'import/default': 2,
    'import/named': 2,
    'import/namespace': [2, {allowComputed: true}],

    // allow extensionless imports of TS files
    'import/extensions': [
      2,
      'ignorePackages',
      {ts: 'never', tsx: 'never', js: 'never', jsx: 'never', mjs: 'never'},
    ],

    // allow imports of dev dependencies from tests and sandboxes
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'sandbox/**',
          'spec/**',
          '**/__integration__/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx,ts,tsx}',
          'test-*.{js,jsx,ts,tsx}',
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}',
          '**/jest{.,-,_}*.{js,jsx,ts,tsx}',
          '**/rollup.config.js',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
        ],
        optionalDependencies: false,
      },
    ],

    // require import groups to be ordered by specificity and separated by linebreaks
    'import/order': [2, {'newlines-between': 'always'}],

    // require well-formatted JSDoc comments, when they exist
    'jsdoc/check-alignment': 2,
    'jsdoc/check-indentation': 2,
    'jsdoc/check-param-names': 2,
    'jsdoc/check-tag-names': 2,
    'jsdoc/newline-after-description': 2,
    'jsdoc/require-hyphen-before-param-description': [2, 'never'],
    'jsdoc/require-description': 2,
    'jsdoc/require-param-description': 2,
    'jsdoc/require-param-name': 2,
    'jsdoc/require-returns-description': 2,

    // allow non-ID-linked <label>s to accomodate those containing linked <input>s
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [2, {assert: 'either'}],

    // allow event listeners on static elements (e.g. onClick on divs)
    'jsx-a11y/no-static-element-interactions': 0,

    // https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
    'prefer-arrow-callback': [2, {allowNamedFunctions: false, allowUnboundThis: true}],

    // disallow .jsx files for consistency
    'react/jsx-filename-extension': 0,

    // allow function creation in render
    'react/jsx-no-bind': 0,

    // allow spreading props
    'react/jsx-props-no-spreading': 0,

    // do not require default props for optional props
    'react/require-default-props': 0,

    'react/sort-comp': [
      2,
      {
        order: [
          'lifecycle-statics',
          'static-variables',
          'static-methods',
          'constructor',
          'instance-variables',
          'lifecycle-methods',
          'everything-else',
          'render',
        ],
        groups: {
          'lifecycle-statics': [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'defaultProps',
          ],
          'lifecycle-methods': [
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],

    // permit both styles of state declaration
    'react/state-in-constructor': 0,

    // require statics to be declared as public fields
    'react/static-property-placement': [2, 'static public field'],
  },
  settings: {
    // do not attempt to parse npm modules or non-JS files for exports
    'import/ignore': ['node_modules', '.(png|svg|jpg|css|pdf)$'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
      rules: {
        // require all functions to have type annotations
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/explicit-function-return-type': [
          2,
          {allowExpressions: true, allowTypedFunctionExpressions: true},
        ],

        // upgrade severity from warning to error
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-non-null-assertion': 2,

        // these are checked by the TS compiler
        '@typescript-eslint/no-unused-vars': 0,
        'import/default': 0,
        'import/export': 0,
        'import/named': 0,
        'import/namespace': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-no-undef': 0,
        'react/no-unused-prop-types': 0,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,

        'no-unused-expressions': 0,
        '@typescript-eslint/no-unused-expressions': 2,

        // exchange base rule for TS-specific rule
        'no-useless-constructor': 0,
        '@typescript-eslint/no-useless-constructor': 2,

        // exchange base rule for TS-specific rule
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 2,

        // exchange base rule for TS-specific rule
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 2,

        // allow ts-ignore comments
        '@typescript-eslint/ban-ts-comment': 0,

        // emulate the upstream JS behavior
        '@typescript-eslint/naming-convention': [
          2,
          {
            selector: 'variableLike',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            leadingUnderscore: 'allow',
            filter: {regex: '\\w_discouraged$', match: false},
          },
          {selector: 'typeLike', format: ['PascalCase']},
        ],
        camelcase: 0,

        // prefer T[] style of arrays
        '@typescript-eslint/array-type': 2,

        // allow noop functions
        '@typescript-eslint/no-empty-function': 0,

        // prevent types from being redundantly specified in JSDoc comments
        'jsdoc/no-types': 2,
      },
    },
  ],
}
