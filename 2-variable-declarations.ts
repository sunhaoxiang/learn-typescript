function f([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
}
f([1, 2])

class C {
  p = 12
  m() {
  }
}
let c = new C()
let clone = { ...c }
clone.p