export const globalA = find([]) // confusing global
export const globalB = implicitGlobal() // implicit global
const unusedA = 1 // unused

// unnecessary body style
export const functionB = a => {
  return a
}
