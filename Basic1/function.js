//Functions:
//block of code that perform a specific task can be invoked when needed
//to use function first we define the function and then call it

/* function define ---->1.  function functionName(){ block of code}
2. funnction functionName(parm1,parm2,....){block of code} -> parm1 = parametr
parm1,parm2,.. ----> local variable --> valid or useable under function block of code/scope {}

Scope: Variables declared inside a function are local to that function and cannot be accessed from outside. This is known as function scope.
*/

//function call ----> functionName() or functionName(parm1,parm2,....) -> parm1 = argument

/* return ==>

Purpose of return:
Returns a value from the function
Ends the function execution immediately
Allows functions to produce output that can be used elsewhere in your code

Key points about return:
A function can only return one value
Code after a return statement won't execute
If no return statement, function returns undefined
You can return any type: numbers, strings, arrays, objects, etc.

Common uses:
Returning calculation results
Returning success/failure status
Returning found items in searches
Returning processed data
*/

//function define
function greeting() {
  console.log('Hello to everyone')
}
greeting() //hello to everyone

function add(x, y) {
  let sum = x + y
  console.log(sum)
}
//function calling
add(1, 55)

function mul(x, y) {
  let mul = x * y
  return mul
}
let mull = mul(2, 3)
console.log(mull)

//--------------------------------------------------------------------------------------------------------------------------

//Arrow Function
//compact way of writing a function
/* const/let functionName = (parm1,parm2,....) =>{block of code}*/

// Regular function
function add1(a, b) {
  return a + b
}

// Same function as arrow function
const add2 = (a, b) => {
  return a + b
}

// Arrow function with implicit return (one-liner)
const add3 = (a, b) => a + b

// Arrow function with single parameter (parentheses optional)
const square = (x) => x * x

// Arrow function with no parameters (parentheses required)
const sayHello = () => console.log('Hello!')

// Arrow function returning object (parentheses required around object)
const createPerson = (name, age) => ({ name: name, age: age })

// Examples of using arrow functions
console.log(add2(5, 3)) // 8
console.log(square(4)) // 16
sayHello() // Hello!
console.log(createPerson('John', 25)) // { name: "John", age: 25 }

//--------------------------------------------------------------------------------------------------------------------------

// Function Expression
// ​You can also define a function and assign it to a variable.
// Here, the function doesn't have a name; it's an anonymous function. The variable add holds the reference to the function.

const add11 = function (a, b) {
  return a + b
}

// Calling the function
let sum = add11(5, 3)
console.log(sum) // Output: 8
