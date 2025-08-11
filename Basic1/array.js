//Array
// Array is a collection of items with a common type
// It is a special type of object that allows you to store multiple values in a single variable
// object --> key-value pairs(key.value) , array --> index-value pairs(index.value)
//array has a object data type

// example:
// let arr = [1, 2, 3, 4, 5];// array of numbers
// let arr2 = ['a', 'b', 'c', 'd'];// array of strings
// let arr3 = [1, 'a', true, null, undefined];// array of mixed types but not recommended

let name = [
  'Prashant',
  'Arsh',
  'Aryan',
  'Surayanh',
  'Kushagra',
  'Abhishek',
  'Samy',
  'Shubham',
]

//if we want to access any element of the array we can use access form it's index and index starts from 0
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])
console.log(name[6])
console.log(name[7])

//to calculate the length of the array we can use the length property  that is arr.length
console.log(name.length) //8

name[0] = 'Prashant Kumar' //updating the value inside the array
console.log(name[0]) //Prashant Kumar

//how to print the whole array by using for loop
for (let i = 0; i < name.length; i++) {
  console.log(name[i])
}

//how to print the whole array by using for-of loop
for (let i of name) {
  console.log(i)
}

//error: name[i] is not defined, because i is a number, not an index
for (let i of name) {
  console.log(name[i]) //undefined
}

//Arraymethods
