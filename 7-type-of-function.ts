function sum(x: number, y: number): number {
  return x + y
}

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc = function(source: string, subString: string): boolean {
  return source.search(subString) !== -1
}

function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}

function buildName2(firstName: string = 'Tom', lastName: string = 'Cat'): string {
  return firstName + ' ' + lastName
}

function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item)
  })
}

function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
