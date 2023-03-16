export const globalA = find([]) // confusing global
export const globalB = implicitGlobal() // implicit global
const unusedA = 1 // unused

// unnecessary body style
export const functionB = (a) => {
  return a
}

export function functionWithUnusedParams(a: string, b: string, c: string): string {
  return b
}

export const foo = {my_prop: 'value'}

export const foo_encouraged = 'foo' // not camelcase
export const foo_discouraged = 'foo' // not camelcase but explicitly allowed suffix
