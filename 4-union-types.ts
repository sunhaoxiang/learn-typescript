let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
myFavoriteNumber = 7

function getString(something: string | number): string {
  return something.toString()
}
