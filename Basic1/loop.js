// Loops
// there are many ways to loop through data in JavaScript.
// for loops, while loops, do..while loop,for..in loops, for..of loops

// --------------------------------------------------------------------------------------------------------------------------

// 1. For Loop

// The for loop is used to execute a block of code a certain number of times.
// It consists of three parts: initialization, condition, and increment/decrement.
// The initialization is executed once before the loop starts, the condition is checked before each iteration,
// and the increment/decrement is executed after each iteration.

// let number = 2
// let multiply = 1
// for (let i = 1; i <= 10; i++) {
//   multiply = number * i
//   console.log(`${number}*${i} = ${multiply}`) //`${number}*${i} = ${multiply}` is a template literal use for better readability
// }
// Output: 2*1 = 2, 2*2 = 4, ..., 2*10 = 20

// the above example also can be written as:
// let aNumber = 2
// let multiply = 1
// for (let i = 1; i <= 10; i++) {
//   multiply = aNumber * i
//   console.log(aNumber, '*', i, '=', multiply)
// }

// --------------------------------------------------------------------------------------------------------------------------

// 2. While Loop

// The while loop is used to execute a block of code as long as a specified condition is true.
// It checks the condition before each iteration, and if the condition is true, it executes the block of code.

// let count = 0
// while (count <= 10) {
//   count++
//   console.log('count is : ', count)
// }

// let num = 3
// while (num <= 10) {
//   if (num % 2 !== 0) {
//     console.log(num + ' ' + 'is an odd number')
//   }
//   num++
// }

// --------------------------------------------------------------------------------------------------------------------------

// 3. Do..While Loop

// The do..while loop is similar to the while loop, but it guarantees that the block of code is executed at least once.
// It checks the condition after executing the block of code, so even if the condition is false on the first iteration, the code will still run once.

// let count = 0
// do {
//   count--
//   console.log('count is : ', count)
//   count++
//   console.log('count is : ', count)
// } while (count > 0)

// --------------------------------------------------------------------------------------------------------------------------

// 4. For..In Loop

// The for..in loop is used to iterate over the properties of an object.
// It allows you to access each property name (key) in the object.
