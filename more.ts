type PlusType = (x: number, y: number) => number

function sum(x: number, y: number) {
    return x + y
}

const sum2: PlusType = sum

type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
  return typeof n === 'string' ? n : n()
}

function getLength(input: string | number): number {
  // const str = input as String
  // if (str.length) {
  //   return str.length
  // } else {
  //   const number = input as Number
  //   return number.toString().length
  // }
  if ((<string>input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  }
}
