// confusing global variable
export const globalA = find([])

// implicit global variable
export const globalB = implicitGlobal()

// unused variable
const unusedA = 1

// unnecessary body style
export const functionB = a => {
  return a
}

// exceed line length where prettier cannot fix
export const long =
  'Text that exceeds the 100 char limit but is unable to be split by prettier. See https://github.com/prettier/eslint-config-prettier#max-len'
