module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
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

    // enforce conciseness in import paths
    'import/no-useless-path-segments': 2,

    // allow non-ID-linked <label>s to accomodate those containing linked <input>s
    'jsx-a11y/label-has-for': 0,

    // allow supposedly-confusing arrows
    'no-confusing-arrow': 0,

    // disallow confusing global browser variables
    'no-restricted-globals': ['error', 'event', 'find'],

    // allow event listeners on static elements (e.g. onClick on divs)
    'jsx-a11y/no-static-element-interactions': 0,

    // allow react-router's <Link to> as a valid href
    // TODO: remove when https://github.com/airbnb/javascript/pull/1648 is released
    'jsx-a11y/anchor-is-valid': [2, {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],

    'prettier/prettier': [2, {
      printWidth: 100,
      semi: false,
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: false,
    }],

    // disallow .jsx files for consistency
    'react/jsx-filename-extension': 0,

    // disallow accessing `this.state` inside of `setState`
    'react/no-access-state-in-setstate': 2,

    // do not require default props for optional props
    'react/require-default-props': 0,

    'react/sort-comp': [2, {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^(on|handle).+$/',
        'getters',
        'setters',
        '/^(get|set).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        rendering: ['/^render.+$/', 'render']
      },
    }]
  },
  settings: {
    // do not attempt to parse npm modules or non-JS files for exports
    'import/ignore': ['node_modules', '.(png|svg|jpg|css|pdf)$'],
    'import/extensions': ['.js'],
    react: {version: '16.3.2'},
  },
}
