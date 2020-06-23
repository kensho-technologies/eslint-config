/* eslint-env jest */
const path = require('path')

const {ESLint} = require('eslint')

const baseConfig = require('.')

test('lints all fixtures', async () => {
  const eslint = new ESLint({baseConfig, ignore: false, useEslintrc: false})
  const results = await eslint.lintFiles([`${__dirname}/fixtures`])
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
