export function forEach<T>(array: T[], callback: (item: T) => void): void {
  for (const item of array) {
    callback(item)
  }
}
