module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['babel', 'prettier'],
  parser: 'babel-eslint',
  env: {
    // allow browser globals
    browser: true,
  },
  rules: {
    // allow require() calls
    'global-require': 0,

    // ensure that default, named, and namespaced imports have been exported by the target file
    'import/default': 2,
    'import/named': 2,
    'import/namespace': [2, {allowComputed: true}],

    // require all module imports to be declared as (dev-)dependencies in package.json
    'import/no-extraneous-dependencies': [2, {devDependencies: true}],

    // require import groups to be ordered by specificity and separated by linebreaks
    'import/order': [2, {'newlines-between': 'always'}],

    // allow files with a single named export (to allow in-progress util files)
    'import/prefer-default-export': 0,

    // allow non-ID-linked <label>s to accomodate those containing linked <input>s
    'jsx-a11y/label-has-for': 0,

    // allow supposedly-confusing arrows
    'no-confusing-arrow': 0,

    // disallow confusing global browser variables
    'no-restricted-globals': ['error', 'event', 'find'],

    // allow variable shadowing, just for convenience
    // TODO: enable?
    'no-shadow': 0,

    // allow dangling underscores in variable names (for "private" class methods)
    'no-underscore-dangle': 0,

    // allow event listeners on static elements (e.g. onClick on divs)
    'jsx-a11y/no-static-element-interactions': 0,

    'prettier/prettier': [2, {
      printWidth: 100,
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: false,
    }],

    // disallow .jsx files for consistency
    'react/jsx-filename-extension': 0,

    // do not require a React import to use JSX (it's included automatically in our Babel preset)
    'react/react-in-jsx-scope': 0,

    // do not require default props for optional props
    'react/require-default-props': 0,

    // TODO: enable when less buggy
    'react/no-unused-prop-types': 0,
  },
  settings: {
    // do not attempt to parse npm modules or non-JS files for exports
    'import/ignore': [
      'node_modules',
      '\.(png|svg|jpg|css|pdf)$'
    ],
    'import/extensions': [
      '.js'
    ],
  },
}
