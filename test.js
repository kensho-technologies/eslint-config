/* eslint-env jest */
const path = require('path')

const {CLIEngine} = require('eslint')

const tsConfig = require('./typescript')

const config = require('.')

async function lintFixtures(baseConfig, fixturesDir) {
  const cli = new CLIEngine({
    baseConfig,
    extensions: ['.js', '.ts', '.tsx'],
    ignore: false,
    useEslintrc: false,
  })
  const {results} = await cli.executeOnFiles([fixturesDir])
  results.forEach(result => {
    const basename = path.basename(result.filePath)
    const messages = result.messages.map(message => ({
      line: message.line,
      column: message.column,
      message: message.message,
      rule: message.ruleId,
      severity: message.severity,
    }))
    expect(messages).toMatchSnapshot(basename)
  })
}

test.each([
  ['JS', config, `${__dirname}/fixtures/js`],
  ['TS', tsConfig, `${__dirname}/fixtures/ts`],
])('lints all %s fixtures', (name, lintConfig, dir) => {
  lintFixtures(lintConfig, dir)
})
