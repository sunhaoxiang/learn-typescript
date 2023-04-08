function add(x: number, y: number, z: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

let result = add(2, 3)

const add2 = (x: number, y: number, z: number = 10): number => {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

const add3: (x: number, y: number, z?: number) => number = add2
