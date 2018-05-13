import path from 'path'

import test from 'ava'
import {CLIEngine} from 'eslint'

import baseConfig from '.'

test('lints all fixtures', async t => {
  const cli = new CLIEngine({useEslintrc: false, baseConfig})
  const formatter = cli.getFormatter()
  const {results} = await cli.executeOnFiles([`${__dirname}/fixtures`])
  t.log(formatter(results))
  results.forEach(result => {
    const basename = path.basename(result.filePath)
    const messages = result.messages.map(message => ({
      line: message.line,
      column: message.column,
      message: message.message,
      rule: message.ruleId,
      severity: message.severity,
    }))
    t.snapshot(messages, basename)
  })
})
