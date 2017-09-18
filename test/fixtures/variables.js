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
