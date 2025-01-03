import path from 'node:path'

import {ESLint} from 'eslint'
import {expect, test} from 'vitest'

test('lints all fixtures', async () => {
  const eslint = new ESLint({ignore: false})
  const results = await eslint.lintFiles([`${import.meta.dirname}/fixtures`])
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
