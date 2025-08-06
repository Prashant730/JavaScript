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

const fullName = 'Prashant'
const student = {
  fullname: fullName,
  fullName: 'Aryan',
}
//there is no relation b/w fullName variable and student.fullName property
// student.fullName is a property of the student object, not a variable
console.log(student.fullname)
console.log(student.fullName)

// -------------------------------------------------------------------------------------------------------------------------
// Conditional statements

// you use another values to check if a condition is true or false for (number and score variables)
let number = 25
if (number % 5 === 0) {
  console.log('number is multiple of 5')
} else {
  console.log('number is not a multiple of 5')
}

let score = 90
if (score >= 90 && score <= 100) {
  console.log('Grade A')
} else if (score >= 70 && score <= 89) {
  console.log('Grade B')
} else if (score >= 60 && score <= 69) {
  console.log('Grade C')
} else if (score >= 50 && score <= 59) {
  console.log('Grade D')
} else {
  console.log('Grade E')
}

//--------------------------------------------------------------------------------------------------------------------------
//loops
