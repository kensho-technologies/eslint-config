export const globalA = find([]) // confusing global var
export const globalB = implicitGlobal() // implicit global var

const unusedA = 1 // unused

export const functionA = (a) => a // unnecessary parens

export const functionB = a => { // unnecessary block
  return a
}
