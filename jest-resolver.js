// workaround for https://github.com/facebook/jest/issues/9771
// necessary because of https://unpkg.com/browse/eslint@8.2.0/package.json

const enhancedResolve = require('enhanced-resolve')

const resolver = enhancedResolve.create.sync({
  extensions: ['.js', '.json'],
  conditionNames: ['require', 'node', 'default'],
})

module.exports = (request, options) => resolver(options.basedir, request)
