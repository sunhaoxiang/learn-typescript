interface  Person {
  name: string
  age: number
}

let tom: Person = {
  name: 'Tom',
  age: 25
}

interface Person2 {
  name: string
  age?: number
}

let tom2: Person2 = {
  name: 'Tom'
}

interface Person3 {
  name: string
  [propName: string]: string
}

let tom3: Person3 = {
  name: 'Tom',
  gender: 'male'
}
