export const globalA = find([]) // confusing global
export const globalB = implicitGlobal() // implicit global
const unusedA = 1 // unused
const SCREAMING_CASE = 1
const PascalNumber = 1 // no pascal number
const PascalBoolean = false // no pascal boolean
const PascalArray = [] // no pascal array
const PascalString = '' // no pascal string
const PascalFunction = (a) => a // pascal functions allowed (for components)

// unnecessary body style
export const functionB = (a) => {
  return a
}

export const foo = {my_prop: 'value'}

export const foo_encouraged = 'foo' // not camelcase
export const foo_discouraged = 'foo' // not camelcase but explicitly allowed suffix
