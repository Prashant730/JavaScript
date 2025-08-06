// Conditional Statements

// Conditional statements are used to perform different actions based on different conditions
// if, else if, else statements
// switch statement
// Ternary operator

// -------------------------------------------------------------------------------------------------------------------------
// 1. if statement
// if statements are used to execute a block of code based on a condition. If the condition is true, the code inside the if block will be executed.
let mode1 = 'dark'
let color1
if (mode1 === 'dark') {
  color1 = 'black'
}
console.log(color1) //black

let mode = 'light'
let color
if (mode === 'dark') {
  color = 'black'
}
console.log(color) //undefined (because the condition is false, color is not assigned)
//it wiil not execute because the condition is false

if (mode === 'light') {
  color = 'white'
}
console.log(color)

//-------------------------------------------------------------------------------------------------------------------------
// 2. if else statement
// if else statements are used to execute a block of code based on a condition. If the condition is true, the code inside the if block will be executed, otherwise the code inside the else block will be executed.

let age1 = 4 // can not get voting id
// let age = 20 // can get voting id
if (age1 >= 18) {
  console.log('can get voting id')
} else {
  console.log('cannot get voting id')
}

//-------------------------------------------------------------------------------------------------------------------------
// 3. if else if statement
// if else if statements are used to execute a block of code based on multiple conditions. If the first condition is true, the code inside the if block will be executed. If the first condition is false, the next condition will be checked, and so on. If none of the conditions are true, the code inside the else block will be executed.

let age = 20 //middle aged
// let age = 12 //minor
// let age = 61 //senior citizen
if (age < 18) {
  console.log('you are minor')
} else if (age > 60) {
  console.log('you are senior citizen')
} else {
  console.log('you are middle aged')
}

// -------------------------------------------------------------------------------------------------------------------------
// 4. switch statement
// switch statements are used to execute a block of code based on the value of a variable.
// It is a cleaner way to write multiple if else statements when you are checking the same variable against different values.

let day = 3 //wednesday
switch (day) {
  case 1:
    cconsole.log('monday')
    break
  case 2:
    console.log('tuesday')
    break
  case 3:
    console.log('wednesday')
    break
  case 4:
    console.log('thursday')
    break
  case 5:
    console.log('friday')
    break
  case 6:
    console.log('saturday')
    break
  case 7:
    console.log('sunday')
    break
  default:
    console.log('invalid day')
    break
}
