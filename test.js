/* eslint-env jest */
const path = require('path')

const {CLIEngine} = require('eslint')

const baseConfig = require('.')

test('lints all fixtures', () => {
  const cli = new CLIEngine({
    baseConfig,
    extensions: ['.js', '.ts', '.tsx'],
    ignore: false,
    useEslintrc: false,
  })
  const {results} = cli.executeOnFiles([`${__dirname}/fixtures`])
  results.forEach((result) => {
    const basename = path.basename(result.filePath)
    const messages = result.messages.map((message) => ({
      line: message.line,
      column: message.column,
      message: message.message,
      rule: message.ruleId,
      severity: message.severity,
    }))
    expect(messages).toMatchSnapshot(basename)
  })
})
