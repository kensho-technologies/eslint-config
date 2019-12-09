# eslint-config-kensho

[![Build Status](https://github.com/kensho-technologies/eslint-preset-kensho/workflows/test/badge.svg)](https://github.com/kensho-technologies/eslint-preset-kensho/actions)
[![npm](https://img.shields.io/npm/v/eslint-preset-kensho.svg)](https://npm.im/eslint-preset-kensho)

This [ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) extends [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) (based on their [style guide](https://github.com/airbnb/javascript)) to work with TypeScript.

Since the upstream config is well-maintained and justified, we try to stick as close to it as possible. All divergences are [annotated](index.js), and tend towards increased ES2019 support, Prettier adoption, and TypeScript compatibility, rather than stylistic preferences.

## Usage

To add linting to a project, first install ESLint, Prettier, TypeScript, and this config as development dependencies:

```sh
$ npm i -D eslint prettier typescript eslint-config-kensho
```

Add an [**ESLint config**](http://eslint.org/docs/user-guide/configuring) which extends the config, e.g.:

```yml
extends: kensho
```

Add a script in **package.json** to [run the linter](http://eslint.org/docs/user-guide/command-line-interface), e.g.:

```json
{
  "scripts": {
    "lint": "eslint src --ext=tsx"
  }
}
```

### JavaScript

A JavaScript config is also provided, for projects which do not use TypeScript. To use it, extend `kensho/javascript` instead of `kensho`, e.g.:

```yml
extends: kensho/javascript
```

## Caveat

The ESLint plugin dependencies specified in [package.json](package.json) should actually be peer dependencies (see [this issue](https://github.com/eslint/eslint/issues/2518)), and installed alongside ESLint and this config. In practice, this is quite tedious, so we have instead specified them as dependencies and rely on npm's dependency flattening to install them alongside the linter.

Note that this approach is technically incorrect, and if any plugin cannot be flattened this way (e.g. due to a conflicting version somewhere else in your dependency tree), **this config will break**. Since our projects use only this config, we feel that practicality outweighs absolute correctness in this case.
