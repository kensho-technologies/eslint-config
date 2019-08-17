/* eslint-env jest */
const path = require('path')

const {CLIEngine} = require('eslint')

const config = require('.')

test('lints all fixtures', async () => {
  const cli = new CLIEngine({
    baseConfig: config,
    extensions: ['.js', '.ts', '.tsx'],
    ignore: false,
    useEslintrc: false,
  })
  const {results} = await cli.executeOnFiles([`${__dirname}/fixtures`])
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
})
