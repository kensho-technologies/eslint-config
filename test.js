import path from 'path'

import test from 'ava'
import {CLIEngine} from 'eslint'

import config from '.'
import tsConfig from './typescript'

async function lintFixtures(t, baseConfig, fixturesDir) {
  const cli = new CLIEngine({useEslintrc: false, baseConfig, extensions: ['.js', '.ts', '.tsx']})
  const formatter = cli.getFormatter()
  const {results} = await cli.executeOnFiles([fixturesDir])
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
}

test('lints all JS fixtures', lintFixtures, config, `${__dirname}/fixtures/js`)
test('lints all TS fixtures', lintFixtures, tsConfig, `${__dirname}/fixtures/ts`)
