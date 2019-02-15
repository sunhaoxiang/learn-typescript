let isDone: boolean = false

let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744

let userName: string = 'bob'

let list1: number[] = [1, 2, 3]
let list2: Array<Number> = [1, 2, 3]

let x: [string, number]
x = ['hello', 10]

enum Color1 {Red, Green, Blue}
let c1: Color1 = Color1.Green

enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Green

let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

let list3: any[] = [1, true, "free"]

function warnUser(): void {
  console.log('This is my warning message')
}
