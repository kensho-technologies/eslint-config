module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
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
    'import/namespace': [2, {allowComputed: true}],

    // require import groups to be ordered by specificity and separated by linebreaks
    'import/order': [2, {'newlines-between': 'always'}],

    // allow non-ID-linked <label>s to accomodate those containing linked <input>s
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [2, {assert: 'either'}],

    // allow event listeners on static elements (e.g. onClick on divs)
    'jsx-a11y/no-static-element-interactions': 0,

    // https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
    'prefer-arrow-callback': [2, {allowNamedFunctions: false, allowUnboundThis: true}],

    'prettier/prettier': [
      2,
      {
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: false,
      },
    ],

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
    'import/extensions': ['.js'],
    react: {version: '16.8.1'},
  },
}
