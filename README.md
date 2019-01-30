# eslint-config-kensho

[![Build Status](https://travis-ci.org/kensho/eslint-config-kensho.svg?branch=master)](https://travis-ci.org/kensho/eslint-config-kensho)

This [ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) extends [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) (based on their [style guide](https://github.com/airbnb/javascript)).

Since the upstream config is well-maintained and justified, we try to stick as close to it as possible. All divergences are [annotated](index.js), and tend towards increased ES2016+ support and compatibility with our infrastructure rather than stylistic preferences.

## Usage

To add JS linting to a project, first install ESLint and this config as development dependencies:

```sh
$ npm i -D eslint prettier eslint-config-kensho
```

Add an [**ESLint config**](http://eslint.org/docs/user-guide/configuring) which extends the config, e.g.:

```yml
extends: kensho
```

Add a script in **package.json** to [run the linter](http://eslint.org/docs/user-guide/command-line-interface), e.g.:

```json
{
  "scripts": {
    "lint": "eslint src"
  }
}
```

### TypeScript

A TypeScript config is also provided. To use it, extend `kensho/typescript` instead of `kensho`, e.g.:

```yml
extends: kensho/typescript
```

Provide an `--ext` flag when invoking ESLint to include TS/TSX files, e.g.:

 ```json
{
  "scripts": {
    "lint": "eslint src --ext ts,tsx"
  }
}
```

## Caveat

The eslint-plugin-X dependencies specified in [package.json](package.json) should actually be peer dependencies (see eslint/eslint#2518), and installed alongside ESLint and this config. In practice, this is quite tedious, so we have instead specified them as dependencies and rely on npm@3's flattening to install them alongside the linter.

Note that this approach is technically incorrect, and if any plugin cannot be flattened this way (e.g. due to a conflicting version somewhere else in your dependency tree), **this config will break**. Since our projects use only this config, we feel that practicality outweighs absolute correctness in this case.
