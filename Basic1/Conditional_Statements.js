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
