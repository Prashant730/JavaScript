const Student = {
  fullName: 'Prashant',
  age: 18,
}
console.log(Student.fullName)
console.log(Student.age)

console.log(Student['fullName'])
console.log(Student['age'])

console.table(Student)

console.log(typeof Student)
console.log(typeof Student.fullName)
console.log(typeof Student.age)

const pen = {
  colorOfPen: 'black',
  colorOfInk: 'blue',
  typeOfPen: 'ballPen',
  priceOfPen: 'Rs10',
}
console.table(pen)

console.log(pen.typeOfPen)
console.log(pen.colorOfPen)
console.log(pen.colorOfInk)
console.log(pen.priceOfPen)

console.log()

console.log(pen.colorofInk) //undefined
console.log(pen.priceofPen) //undefined

console.log()

console.log(typeof pen)
