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
// loops

let num = 1
for (let i = 1; i <= 100; i++) {
  if (num % 2 === 0) {
    console.log(num + ' is even')
    num++
  } else {
    console.log(num + ' is odd')
    num++
  }
}
// this loop will print numbers from 1 to 100 and indicate whether each number is even or odd

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is even')
    i++ //by using i++ here, it will skip the next number and print even no
  } else {
    console.log(i + ' is odd')
    i++ //by using i++ here, it will skip the next number and print odd no
  }
}
// this loop will print numbers from 1 to 100 and indicate whether each number is even or odd, but it will skip every second number

let guessNumber = 50
let number1 = 50
while (true) {
  if (guessNumber !== number1) {
    console.log('Guess number is not equal to the actual Number')
  } else {
    console.log('Guess number is equal to the actual Number')
  }
  break
}
// this loop will check if the guessed number is equal to the actual number and print a message accordingly

//---------------------------------------------------------------------------------------------------------------------------

//string methods

let name = 'Prashant'
let nameLength = name.length
let specialChar = '@'
console.log(specialChar + name + name.length)
console.log(name.toUpperCase()) //PRASHANT
console.log(name.toLowerCase()) //prashant
console.log(name.charAt(0)) //P
console.log(name.charAt(nameLength - 1)) //t
console.log(name.indexOf('a')) //2
console.log(name.indexOf('z')) //-1 (not found)
console.log(name.includes('a')) //true
console.log(name.includes('z')) //false
console.log(name.startsWith('P')) //true
console.log(name.startsWith('Z')) //false
console.log(name.endsWith('t')) //true
console.log(name.endsWith('a')) //false
console.log(name.replace('Prashant', 'Aryan')) //Aryan
console.log(name.replace('a', 'o')) //Proshant (only replaces the first occurrence)
console.log(name.replaceAll('a', 'o')) //Proshont (replaces all occurrences)

// -------------------------------------------------------------------------------------------------------------------------

Array

let marks = [85, 97, 44, 37, 76, 60]
let length = marks.length
let sum = 0
for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i]
}
let avg = sum / length
console.log(avg)

let priceOfItem = [250, 645, 300, 900, 50]
for (let price of priceOfItem) {
  let discount = price * 0.1
  let finalPrice = price - discount
  console.log(finalPrice)
}

let companies = ['bloombery', 'microsoft', 'google', 'uber', 'ibm', 'netflix']
companies.shift()
console.log(companies)
companies.splice(2, 1, 'ola')
console.log(companies)
companies.push('amazon')
console.log(companies)

//-------------------------------------------------------------------------------------------------------------------------

//Functions
let count = 0
function countVowels(string) {
  let arr = string.split('')
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === 'a' ||
      arr[i] == 'A' ||
      arr[i] == 'e' ||
      arr[i] == 'E' ||
      arr[i] == 'i' ||
      arr[i] == 'I' ||
      arr[i] == 'O' ||
      arr[i] == 'o' ||
      arr[i] == 'u' ||
      arr[i] == 'U'
    ) {
      count++
    }
  }
  console.log(count)
  console.log(arr.length)
}
countVowels('aeiou AEIOU')

//without using split() function
let count1 = 0
function countVowels(string) {
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === 'a' ||
      string[i] == 'A' ||
      string[i] == 'e' ||
      string[i] == 'E' ||
      string[i] == 'i' ||
      string[i] == 'I' ||
      string[i] == 'O' ||
      string[i] == 'o' ||
      string[i] == 'u' ||
      string[i] == 'U'
    ) {
      count1++
    }
  }
  console.log(count1)
}
countVowels('string')
