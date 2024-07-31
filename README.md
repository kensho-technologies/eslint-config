# eslint-config

[![Build Status](https://img.shields.io/github/actions/workflow/status/kensho-technologies/eslint-config/ci.yml?branch=main)](https://github.com/kensho-technologies/eslint-config/actions)
[![npm](https://img.shields.io/npm/v/@kensho-technologies/eslint-config.svg)](https://npm.im/@kensho-technologies/eslint-config)

## Install

```sh
$ npm i -D eslint typescript @kensho-technologies/eslint-config
```

## Usage

Add an [**ESLint config**](http://eslint.org/docs/user-guide/configuring) that extends the config to a project, e.g.:

```json
{
  "extends": "@kensho-technologies/eslint-config"
}
```

Add scripts in **package.json** to [run the linter](http://eslint.org/docs/user-guide/command-line-interface), e.g.:

```json
{
  "scripts": {
    "fix": "eslint --fix .",
    "test": "eslint ."
  }
}
```

## License

Licensed under the Apache 2.0 License. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

Copyright 2020-present Kensho Technologies, LLC. The present date is determined by the timestamp of the most recent commit in the repository.
