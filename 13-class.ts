class Animal {
  public name
  public constructor(name) {
    this.name = name
  }
}

let a = new Animal('Jack')
console.log(a.name)
a.name = 'Tom'
console.log(a.name)

abstract class Animal2 {
  public name
  public constructor(name) {
    this.name = name
  }
  public abstract sayHi()
}

class Cat extends Animal2 {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`)
  }
}

let cat = new Cat('Tom')

class Animal3 {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi(): string {
    return `My name is ${this.name}`
  }
}

let b: Animal3 = new Animal3('Jack')
console.log(b.sayHi())
