// global objects
const a: Array<number> = [1, 2, 3]

const date: Date = new Date()
date.getTime()

const reg: RegExp = /abc/
reg.test('abc')

// build-in object
Math.pow(2, 2)

let body: HTMLElement = document.body

let allLis: NodeList = document.querySelectorAll('li')
allLis.item(0)

document.addEventListener('click', (e: MouseEvent) => {
  e.preventDefault()
})

// Utility Types
interface IPerson {
  name: string,
  age: number
}

let Alex: IPerson = {
  name: 'Alex',
  age: 20
}

type IPartial = Partial<IPerson>
let Alex2: IPartial = { name: 'Alex' }

type IOmit = Omit<IPerson, 'name'>
let Alex3: IOmit = { age: 20 }

type IPick = Pick<IPerson, 'name'>
let Alex4: IPick = { name: 'Alex' }
