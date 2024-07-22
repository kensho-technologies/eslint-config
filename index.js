const confusingBrowserGlobals = require('confusing-browser-globals')

module.exports = {
  extends: ['eslint:recommended', 'plugin:import/typescript', 'prettier'],
  plugins: ['import', 'react', 'jsx-a11y', 'react-hooks', 'jsdoc'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  rules: {
    // https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
    'arrow-body-style': [2, 'as-needed', {requireReturnForObjectLiteral: false}],

    // disallow uncommon syntax that is hard to use correctly
    'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],

    // ensure that default, named, and namespaced imports have been exported by the target file
    'import/default': [2],
    'import/named': [2],
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
          '**/__integration_tests__/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx,ts,tsx}',
          'test-*.{js,jsx,ts,tsx}',
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}',
          '**/jest{.,-,_}*.{js,jsx,ts,tsx}',
          '**/*.config.{js,jsx,ts,tsx}',
          '**/*.config.*.{js,jsx,ts,tsx}',
        ],
        optionalDependencies: false,
      },
    ],

    // require import groups to be ordered by specificity and separated by linebreaks
    'import/order': [2, {'newlines-between': 'always'}],

    // require well-formatted JSDoc comments, when they exist
    'jsdoc/check-alignment': [2],
    'jsdoc/check-indentation': [2],
    'jsdoc/check-param-names': [2],
    'jsdoc/check-tag-names': [2, {definedTags: ['jest-environment']}],
    'jsdoc/require-hyphen-before-param-description': [2, 'never'],
    'jsdoc/require-description': [2],
    'jsdoc/require-param-description': [2],
    'jsdoc/require-param-name': [2],
    'jsdoc/require-returns-description': [2],
    'jsdoc/tag-lines': [2, 'never', {startLines: 1}],

    // allow non-ID-linked <label>s to accomodate those containing linked <input>s
    'jsx-a11y/label-has-associated-control': [2, {assert: 'either'}],

    // https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
    'prefer-arrow-callback': [2, {allowNamedFunctions: false, allowUnboundThis: true}],

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

    // require statics to be declared as public fields
    'react/static-property-placement': [2, 'static public field'],

    // follow rules of hooks
    'react-hooks/rules-of-hooks': [2],
    'react-hooks/exhaustive-deps': [2],

    // everything below is ported from eslint-config-airbnb
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],
    'jsx-a11y/anchor-has-content': ['error', {components: []}],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': ['error'],
    'jsx-a11y/aria-props': ['error'],
    'jsx-a11y/aria-proptypes': ['error'],
    'jsx-a11y/aria-role': ['error', {ignoreNonDOM: false}],
    'jsx-a11y/aria-unsupported-elements': ['error'],
    'jsx-a11y/click-events-have-key-events': ['error'],
    'jsx-a11y/control-has-associated-label': [
      'error',
      {
        labelAttributes: ['label'],
        controlComponents: [],
        ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        depth: 5,
      },
    ],
    'jsx-a11y/heading-has-content': ['error', {components: ['']}],
    'jsx-a11y/html-has-lang': ['error'],
    'jsx-a11y/iframe-has-title': ['error'],
    'jsx-a11y/img-redundant-alt': ['error'],
    'jsx-a11y/interactive-supports-focus': ['error'],
    'jsx-a11y/lang': ['error'],
    'jsx-a11y/media-has-caption': ['error', {audio: [], video: [], track: []}],
    'jsx-a11y/mouse-events-have-key-events': ['error'],
    'jsx-a11y/no-access-key': ['error'],
    'jsx-a11y/no-autofocus': ['error', {ignoreNonDOM: true}],
    'jsx-a11y/no-distracting-elements': ['error', {elements: ['marquee', 'blink']}],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {tr: ['none', 'presentation']},
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']},
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': ['error', {tags: [], roles: ['tabpanel']}],
    'jsx-a11y/no-redundant-roles': ['error'],
    'jsx-a11y/role-has-required-aria-props': ['error'],
    'jsx-a11y/role-supports-aria-props': ['error'],
    'jsx-a11y/scope': ['error'],
    'jsx-a11y/tabindex-no-positive': ['error'],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
        allowAfterThisConstructor: false,
        allowFunctionParams: true,
        enforceInClassFields: false,
        allowInArrayDestructuring: true,
        allowInObjectDestructuring: true,
      },
    ],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate',
        ],
        enforceForClassFields: true,
      },
    ],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'react/jsx-boolean-value': ['error', 'never', {always: []}],
    'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],
    'react/jsx-no-undef': ['error'],
    'react/jsx-pascal-case': ['error', {allowAllCaps: true, ignore: []}],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/no-danger': ['warn'],
    'react/no-deprecated': ['error'],
    'react/no-did-update-set-state': ['error'],
    'react/no-will-update-set-state': ['error'],
    'react/no-is-mounted': ['error'],
    'react/no-string-refs': ['error'],
    'react/no-unknown-property': ['error'],
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],
    'react/prop-types': ['error', {ignore: [], customValidators: [], skipUndeclared: false}],
    'react/require-render-return': ['error'],
    'react/self-closing-comp': ['error'],
    'react/jsx-no-target-blank': [
      'error',
      {enforceDynamicLinks: 'always', links: true, forms: false},
    ],
    'react/jsx-no-comment-textnodes': ['error'],
    'react/no-render-return-value': ['error'],
    'react/no-find-dom-node': ['error'],
    'react/no-danger-with-children': ['error'],
    'react/no-unused-prop-types': ['error', {customValidators: [], skipShapeProps: true}],
    'react/style-prop-object': ['error'],
    'react/no-unescaped-entities': ['error'],
    'react/no-children-prop': ['error'],
    'react/no-array-index-key': ['error'],
    'react/forbid-foreign-prop-types': ['warn', {allowInPropTypes: true}],
    'react/void-dom-elements-no-children': ['error'],
    'react/default-props-match-prop-types': ['error', {allowRequiredDefaults: false}],
    'react/no-redundant-should-component-update': ['error'],
    'react/no-unused-state': ['error'],
    'react/no-typos': ['error'],
    'react/jsx-curly-brace-presence': ['error', {props: 'never', children: 'never'}],
    'react/destructuring-assignment': ['error', 'always'],
    'react/no-access-state-in-setstate': ['error'],
    'react/button-has-type': ['error', {button: true, submit: true, reset: false}],
    'react/no-this-in-sfc': ['error'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-no-script-url': ['error', [{name: 'Link', props: ['to']}]],
    'react/jsx-no-constructed-context-values': ['error'],
    'react/no-unstable-nested-components': ['error'],
    'react/no-namespace': ['error'],
    'react/prefer-exact-props': ['error'],
    'react/no-arrow-function-lifecycle': ['error'],
    'react/no-invalid-html-attribute': ['error'],
    'react/no-unused-class-component-methods': ['error'],
    strict: ['error', 'never'],
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        caseSensitive: true,
        caseSensitiveStrict: false,
      },
    ],
    'import/export': ['error'],
    'import/no-named-as-default': ['error'],
    'import/no-named-as-default-member': ['error'],
    'import/no-mutable-exports': ['error'],
    'import/no-amd': ['error'],
    'import/first': ['error'],
    'import/no-duplicates': ['error'],
    'import/newline-after-import': ['error'],
    'import/no-absolute-path': ['error'],
    'import/no-dynamic-require': ['error'],
    'import/no-webpack-loader-syntax': ['error'],
    'import/no-named-default': ['error'],
    'import/no-self-import': ['error'],
    'import/no-cycle': [
      'error',
      {
        maxDepth: '∞',
        ignoreExternal: false,
        allowUnsafeDynamicCyclicDependency: false,
      },
    ],
    'import/no-useless-path-segments': ['error', {commonjs: true}],
    'import/no-import-module-exports': ['error', {exceptions: []}],
    'import/no-relative-packages': ['error'],
    'no-restricted-exports': ['error', {restrictedNamedExports: ['default', 'then']}],
    'no-useless-computed-key': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-rename': [
      'error',
      {ignoreDestructuring: false, ignoreImport: false, ignoreExport: false},
    ],
    'no-var': ['error'],
    'object-shorthand': ['error', 'always', {ignoreConstructors: false, avoidQuotes: true}],
    'prefer-const': ['error', {destructuring: 'any', ignoreReadBeforeAssign: true}],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {array: false, object: true},
        AssignmentExpression: {array: true, object: false},
      },
      {enforceForRenamedProperties: false},
    ],
    'prefer-numeric-literals': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    'symbol-description': ['error'],
    'no-label-var': ['error'],
    'no-restricted-globals': [
      'error',
      {name: 'isFinite', message: 'Use Number.isFinite instead.'},
      {name: 'isNaN', message: 'Use Number.isNaN instead.'},
    ].concat(confusingBrowserGlobals),
    'no-shadow': ['error'],
    'no-undef-init': ['error'],
    'no-unused-vars': ['error', {vars: 'all', args: 'after-used', ignoreRestSiblings: true}],
    'no-use-before-define': ['error', {functions: true, classes: true, variables: true}],
    camelcase: [
      'error',
      {properties: 'never', ignoreDestructuring: false, ignoreImports: false, ignoreGlobals: false},
    ],
    'func-names': ['warn'],
    'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: false}],
    'lines-around-directive': ['error', {before: 'always', after: 'always'}],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        properties: true,
      },
    ],
    'no-array-constructor': ['error'],
    'no-bitwise': ['error'],
    'no-continue': ['error'],
    'no-lonely-if': ['error'],
    'no-multi-assign': ['error'],
    'no-nested-ternary': ['error'],
    'no-new-object': ['error'],
    'no-plusplus': ['error'],
    'no-unneeded-ternary': ['error', {defaultAssignment: false}],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-exponentiation-operator': ['error'],
    'prefer-object-spread': ['error'],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {exceptions: ['-', '+'], markers: ['=', '!', '/']},
        block: {exceptions: ['-', '+'], markers: ['=', '!', ':', '::'], balanced: true},
      },
    ],
    'unicode-bom': ['error', 'never'],
    'global-require': ['error'],
    'no-buffer-constructor': ['error'],
    'no-new-require': ['error'],
    'no-path-concat': ['error'],
    'no-await-in-loop': ['error'],
    'no-console': ['warn'],
    'no-promise-executor-return': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-unreachable-loop': ['error', {ignore: []}],
    'valid-typeof': ['error', {requireStringLiterals: true}],
    'array-callback-return': [
      'error',
      {allowImplicit: true, checkForEach: false, allowVoid: false},
    ],
    'block-scoped-var': ['error'],
    'consistent-return': ['error'],
    'default-case': ['error', {commentPattern: '^no default$'}],
    'default-case-last': ['error'],
    'default-param-last': ['error'],
    'dot-notation': ['error', {allowKeywords: true, allowPattern: ''}],
    eqeqeq: ['error', 'always', {null: 'ignore'}],
    'grouped-accessor-pairs': ['error'],
    'guard-for-in': ['error'],
    'max-classes-per-file': ['error', 1],
    'no-alert': ['warn'],
    'no-caller': ['error'],
    'no-constructor-return': ['error'],
    'no-else-return': ['error', {allowElseIf: false}],
    'no-empty-function': ['error', {allow: ['arrowFunctions', 'functions', 'methods']}],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    'no-implied-eval': ['error'],
    'no-iterator': ['error'],
    'no-labels': ['error', {allowLoop: false, allowSwitch: false}],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
        ],
      },
    ],
    'no-proto': ['error'],
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: false,
      },
    ],
    'no-useless-concat': ['error'],
    'no-useless-return': ['error'],
    'no-void': ['error'],
    'prefer-promise-reject-errors': ['error', {allowEmptyReject: true}],
    'prefer-regex-literals': ['error', {disallowRedundantWrapping: true}],
    radix: ['error'],
    'vars-on-top': ['error'],
    yoda: ['error'],
  },

  settings: {
    // do not attempt to parse npm modules or non-JS files for exports
    'import/ignore': ['node_modules', '.(png|svg|jpg|css|pdf)$'],

    'import/extensions': ['.ts', '.cts', '.mts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.cts', '.mts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.cts', '.mts', '.tsx', '.js', '.jsx'],
      },
    },

    react: {
      pragma: null,
      version: 'detect',
      defaultVersion: '18',
    },

    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
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
        'import/default': 0,
        'import/export': 0,
        'import/named': 0,
        'import/namespace': 0,
        'import/no-unresolved': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-no-undef': 0,
        'react/no-unused-prop-types': 0,
        'react/prop-types': 0,
        'react/no-unknown-property': 0,

        'default-param-last': 0,
        '@typescript-eslint/default-param-last': 2,

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
        '@typescript-eslint/no-shadow': [2, {allow: ['css']}],

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
        'no-empty-function': 0,
        '@typescript-eslint/no-empty-function': 0,

        // disallow unused variables
        '@typescript-eslint/no-unused-vars': [2, {ignoreRestSiblings: true}],

        // prevent types from being redundantly specified in JSDoc comments
        'jsdoc/no-types': 2,
      },
    },
  ],
}
