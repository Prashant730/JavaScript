// Loops
// there are many ways to loop through data in JavaScript.
// for loops, while loops, do..while loop,for..in loops, for..of loops

// --------------------------------------------------------------------------------------------------------------------------

// 1. For Loop

// The for loop is used to execute a block of code a certain number of times.
// It consists of three parts: initialization, condition, and increment/decrement.
// The initialization is executed once before the loop starts, the condition is checked before each iteration,
// and the increment/decrement is executed after each iteration.

let number = 2
let multiply = 1
for (let i = 1; i <= 10; i++) {
  multiply = number * i
  console.log(`${number}*${i} = ${multiply}`) //`${number}*${i} = ${multiply}` is a template literal use for better readability
}
// Output: 2*1 = 2, 2*2 = 4, ..., 2*10 = 20

// the above example also can be written as:
let aNumber = 2
let multiply1 = 1
for (let i = 1; i <= 10; i++) {
  multiply1 = aNumber * i
  console.log(aNumber, '*', i, '=', multiply1)
}

// --------------------------------------------------------------------------------------------------------------------------

// 2. While Loop

// The while loop is used to execute a block of code as long as a specified condition is true.
// It checks the condition before each iteration, and if the condition is true, it executes the block of code.

let count = 0
while (count <= 10) {
  count++
  console.log('count is : ', count)
}

let num = 3
while (num <= 10) {
  if (num % 2 !== 0) {
    console.log(num + ' ' + 'is an odd number')
  }
  num++
}

// --------------------------------------------------------------------------------------------------------------------------

// 3. Do..While Loop

// The do..while loop is similar to the while loop, but it guarantees that the block of code is executed at least once.
// It checks the condition after executing the block of code, so even if the condition is false on the first iteration, the code will still run once.

let count1 = 0
do {
  count1--
  console.log('count is : ', count1)
  count1++
  console.log('count is : ', count1)
} while (count1 > 0)

// --------------------------------------------------------------------------------------------------------------------------

// 4. For..In Loop

// The for..in loop is used to iterate over the properties of an object.
// It allows you to access each property name (key) in the object.

const student = {
  name: 'Prashant',
  rollNo: 59,
}
for (const i in student) {
  //i -> key , student -> object
  // console.log(i, student.i) // Output: name undefined, rollNo undefined
  // The above line will not work as expected because student.i is trying to access a property named 'i' which does not exist.
  // Instead, we should use student[i] to access the value of the property with the key 'i'. student[i] -> value
  // Corrected line:
  console.log(i, student[i]) // Output: name Prashant, rollNo 59
}

// --------------------------------------------------------------------------------------------------------------------------

// 5. For..Of Loop

// The for..of loop is used to iterate over iterable objects like arrays, strings, and other collections.
// It allows you to access each value in the iterable directly, without needing to use an index

let str = 'Hello World!'
for (let i of str) {
  console.log(i) // Output: H, e, l, l, o,  , W, o, r, l, d, !
}
// The above code will print each character of the string 'Hello World!' on a new line.

let str1 = 'Hello World!'
let count2 = 0
for (let i of str1) {
  count2++
}
console.log(count2) // Output: 12 (the total number of characters in the string including spaces and punctuation)
// The above code counts the total number of characters in the string 'Hello World!' and prints the count.
