// //Array
// // Array is a collection of items with a common type
// // It is a special type of object that allows you to store multiple values in a single variable
// // object --> key-value pairs(key.value) , array --> index-value pairs(index.value)
// //array has a object data type

// // example:
// // let arr = [1, 2, 3, 4, 5];// array of numbers
// // let arr2 = ['a', 'b', 'c', 'd'];// array of strings
// // let arr3 = [1, 'a', true, null, undefined];// array of mixed types but not recommended

// let name = [
//   'Prashant',
//   'Arsh',
//   'Aryan',
//   'Surayanh',
//   'Kushagra',
//   'Abhishek',
//   'Samy',
//   'Shubham',
// ]

// //if we want to access any element of the array we can use access form it's index and index starts from 0
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// console.log(name[4])
// console.log(name[5])
// console.log(name[6])
// console.log(name[7])

// //to calculate the length of the array we can use the length property  that is arr.length
// console.log(name.length) //8

// name[0] = 'Prashant Kumar' //updating the value inside the array
// console.log(name[0]) //Prashant Kumar

// //how to print the whole array by using for loop
// for (let i = 0; i < name.length; i++) {
//   console.log(name[i])
// }

// //how to print the whole array by using for-of loop
// for (let i of name) {
//   console.log(i)
// }

// //error: name[i] is not defined, because i is a number, not an index
// for (let i of name) {
//   console.log(name[i]) //undefined
// }

//-------------------------------------------------------------------------------------------------------------------------

//Array methods:

//push():add the element at the end(it do not effect the original array)
//pop():delete form the end and return the array(it do not effect the original array)
//toString():convert the array in to string(it change the original array in to string)
//concat():join multiple array and return the array(it do not effect the original array)
//unshift():add the new element at the start
//shift():delete the element from the start and return
//slie():return the pice of the array-->slice(statIndex,endIndex),endIndex-->not included(it do not effect the original array)
//splice():change original array(add,replace,remove)-->splice(startIndex,delCount,newEle..)-->(change the original array)

let array = [1, 2, 3, 4, 5, 6]
console.log(array)

//push
array.push(7) //add 6 at the end of the array
console.log(array)

//pop
array.pop()
console.log(array) //remove the last element of the array

//toString
console.log(array.toString()) //convert the array in string type

//concat
let brr = [7, 8]
console.log(array.concat(brr)) //array+brr=[1,2,3,4,5,6,7,8]

//unshift
brr.unshift(0) //add element at index 0
console.log(brr)

//shift
brr.shift(9) //delete element from index 0
console.log(brr)

//slice
console.log(array.slice(1, 4))
console.log(array.slice(4))
console.log(array.slice(1))
console.log(array.slice(-5, 1))
console.log(array.slice(-5, -1))
console.log(array.slice(-5))

//
