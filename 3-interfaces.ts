interface LabelledValue {
  label: string
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'}
printLabel(myObj);

interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: 'white', area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({color: 'black'})

interface StringArray {
  [index: number]: string
}

let myArray: StringArray = ['BOb', 'Fred']
let myStr: string = myArray[0]

interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  setTime (d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {}
}

interface Shape {
   color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke{
  sideLength: number
}

let square = <Square>{}
square.color = 'blue'
square.penWidth = 5.0
square.sideLength = 10
