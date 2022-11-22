export default function sortBy<T extends object, K extends string>(array: Array<T>, key: K): Array<T> {
  return array.sort((_a, _b) => {
    const a = _a[key as any as keyof T]
    const b = _b[key as any as keyof T]
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}