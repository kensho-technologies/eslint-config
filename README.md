# eslint-config

Standard ESLint config shared across Kensho projects.

## Install

```sh
$ npm i -D eslint typescript @kensho-technologies/eslint-config
```

## Usage

Add an [**ESLint configuration file**](https://eslint.org/docs/latest/use/configure/configuration-files) that includes the Kensho config:

```js
import configs from '@kensho-technologies/eslint-config'

export default [...configs]
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
