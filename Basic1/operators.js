// Operators are special symbols that perform operations on variables and values.
// In JavaScript, there are several types of operators, including arithmetic, assignment, comparison,
// logical, bitwise, and more.

// --------------------------------------------------------------------------------------------------------------------------

// 1. Arithmetic Operators(+,-,*,/,%,**)
// Arithmetic operators are used to perform mathematical operations on numbers.

//  + -> add , - -> subtract, * -> multiply, / -> divide, % -> modulus, ** -> exponentiation(power)

let a = 5
let b = 2
console.log(a + b) //7
console.log(a - b) //3
console.log(a * b) //10
console.log(a / b) //2.5(quotient)
console.log(a % b) //1(remainder)
console.log(a ** b) //25(a to the power of b)

// --------------------------------------------------------------------------------------------------------------------------

// 2. Assignment Operators(=, +=, -=, *=, /=, %=, **=)
// Assignment operators are used to assign values to variables.
// The basic assignment operator is '=', which assigns the value on the right to the variable on the left.
// Other assignment operators combine assignment with arithmetic operations.

/*= -> assign, += -> add and assign(a = a + b), -= -> subtract and assign(a = a - b),
 *= -> multiply and assign(a = a * b), /= -> divide and assign(a = a / b), %= -> modulus and assign(a = a % b),
 **= -> exponentiation and assign(a = a ** b) */

let x = 10
let y = 5
console.log((x += y)) //15 (x = x + y)
let a1 = 10
let b1 = 5
console.log((a1 -= b1)) //5 (a1 = a1 - b1)
let c = 10
let d = 5
console.log((c *= d)) //50 (c = c * d)
let e = 10
let f = 5
console.log((e /= f)) //2 (e = e / f)
let g = 10
let h = 5
console.log((g %= h)) //0 (g = g % h)
let i = 10
let j = 5
console.log((i **= j)) //100000 (i = i ** j)

// but

let k = 10
let l = 5

console.log((k += l)) //15 (k = k + l)
console.log('value of k = ', k) // 15
console.log()
// the k+l give value 15 and then assign it to k by using = operator (k = k+ l , k+l -> 15, k -> 15)

console.log((k -= l)) //10 // (k = k - l) (k -> 15, l -> 5, k - l -> 10, k -> 10)
console.log('value of k = ', k) // 10
console.log()

console.log((k *= l)) //50 (k = k * l) (k -> 10, l -> 5, k * l -> 50, k -> 50)
console.log('value of k = ', k) // 50
console.log()

console.log((k /= l)) //10 (k = k / l) (k -> 50, l -> 5, k / l -> 10, k -> 10)
console.log('value of k = ', k) // 10
console.log()

console.log((k %= l)) //0 (k = k % l) (k -> 10, l -> 5, k % l -> 0, k -> 0)
console.log('value of k = ', k) // 0
console.log()

console.log((k = l))
console.log('value of k = ', k) //5
console.log()
//k is assigned the value of l, which is 5 assigment also works from right to left

console.log((k **= l)) //3125 (k = k ** l) (k -> 5, l -> 5, k ** l -> 3125, k -> 3125)
console.log('value of k = ', k) // 3125

// --------------------------------------------------------------------------------------------------------------------------

// 3. Comparison Operators(==, ===, !=, !==, >, <, >=, <=)
// Comparison operators are used to compare two values and return a boolean result (true or false).

// == -> equal value, === -> equal value and type, != -> not equal value, !== -> not equal value and type,
// > -> greater than, < -> less than, >= -> greater than or equal to, <= -> less than or equal to
