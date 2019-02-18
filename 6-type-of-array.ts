let fibonacci: number[] = [1, 1, 2, 3, 5]

let fibonacci2: Array<number> = [1, 1, 2, 3, 5]

interface NumberArray {
  [index: number]: number
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5]

let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }]

function sum() {
  let args: IArguments = arguments
}
