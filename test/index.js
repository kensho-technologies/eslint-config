import test from 'ava'
import {CLIEngine} from 'eslint'

const cli = new CLIEngine()
const formatter = cli.getFormatter()

const invalid = async (t, input, count = 1) => {
  const result = await cli.executeOnFiles([`${__dirname}/fixtures/${input}.js`])
  t.is(result.errorCount, count, formatter(result.results))
  t.is(result.warningCount, 0, formatter(result.results))
}

invalid.title = provided => `correctly lints issues with ${provided}`

test('imports', invalid, 'import', 3)
test('missing propTypes', invalid, 'prop-types')
test('variables', invalid, 'variables', 4)
