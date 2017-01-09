module.exports = {
  extends: 'airbnb',
  plugins: ['babel'],
  parser: 'babel-eslint',
  env: {
    // allow browser globals
    browser: true,
  },
  rules: {
    // allow parens around arrow functions only when necessary (0 or >=2 args)
    'arrow-parens': [2, 'as-needed'],

    // require trailing commas in all contexts except function calls
    'comma-dangle': [2, 'always-multiline'],

    // allow require() calls
    'global-require': 0,

    // ensure that default, named, and namespaced imports have been exported by the target file
    'import/default': 2,
    'import/named': 2,
    'import/namespace': 2,

    // require all module imports to be declared as (dev-)dependencies in package.json
    'import/no-extraneous-dependencies': [2, {devDependencies: true}],

    // require import groups to be ordered by specificity and separated by linebreaks
    'import/order': [2, {'newlines-between': 'always'}],

    // allow files with a single named export (to allow in-progress util files)
    'import/prefer-default-export': 0,

    // allow non-ID-linked <label>s to accomodate those containing linked <input>s
    'jsx-a11y/label-has-for': 0,

    // require single quotes in JSX
    'jsx-quotes': [2, 'prefer-single'],

    // require multi-line operators to occur at the start of the line, except && and ||
    'operator-linebreak': [2, 'before', {overrides: {'&&': 'after', '||': 'after'}}],

    // allow supposedly-confusing arrows
    'no-confusing-arrow': 0,

    // do not allow more than one empty line anywhere
    'no-multiple-empty-lines': [2, {max: 1, maxEOF: 1}],

    // disallow confusing global browser variables
    'no-restricted-globals': ['error', 'event', 'find'],

    // allow variable shadowing, just for convenience
    // TODO: enable?
    'no-shadow': 0,

    // allow dangling underscores in variable names (for "private" class methods)
    'no-underscore-dangle': 0,

    // disallow spaces in between curly braces
    'babel/object-curly-spacing': [2, 'never'],
    'object-curly-spacing': 0,

    // disallow .jsx files for consistency
    'react/jsx-filename-extension': 0,

    // do not require a React import to use JSX (it's included automatically in our Babel preset)
    'react/react-in-jsx-scope': 0,

    // do not require default props for optional props
    'react/require-default-props': 0,

    // disallow semicolons
    'semi': [2, 'never'],

    // don't enforce JSX indentation, due to bugginess of the linter implementation :(
    // TODO: https://github.com/yannickcr/eslint-plugin-react/issues/540
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-closing-bracket-location': 0,

    // TODO: enable when less buggy
    'react/no-unused-prop-types': 0,

    // allow event listeners on static elements (e.g. onClick on divs)
    'jsx-a11y/no-static-element-interactions': 0,
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
