function echo<T>(arg: T): T {
  return arg
}
const str: string = 'str'
const result = echo(str)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

const arrs = echoWithArr([1, 2, 3])

interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

const str1: string = echoWithLength('str')
const obj: object = echoWithLength({ length: 10, width: 10 })
const arr2 = echoWithLength([1, 2, 3])
