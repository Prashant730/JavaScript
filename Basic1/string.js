// strings
// string are the sequence of characters that are used to represent text
// they are immutable, meaning once created, they cannot be changed
// string literals can be created using single quotes, double quotes, or backticks(" " , ' ', ` `)
//string behave like a object in javascript (for example --> string.length , object.key)

//--------------------------------------------------------------------------------------------------------------------------

let str1 = 'Prashant'
let str2 = 'Kumar'

//str.lenth --> give the length of string --> that is number of characters in string
console.log(str1.length) //8
console.log(str2.length) //5

//str.indexOf('a') --> gives the index of first occurrence of 'a' in string
console.log(str1.indexOf('a')) //2
console.log(str2.indexOf('e')) //-1 (not found)

//str.lastIndexOf('a') --> gives the index of last occurrence of 'a' in string
console.log(str1.lastIndexOf('a')) //5
console.log(str2.lastIndexOf('i')) //-1 (not found)

//str.charAt(index) --> gives the character at the specified index
console.log(str1.charAt(0)) //P
console.log(str2.charAt(4)) //K
console.log(str2.charAt(5)) //'' (empty string, index out of bounds)

//str indices it is same as str.carAt(index)
console.log(str1[0]) //P
console.log(str2[4]) //K
console.log(str2[5]) //undefined (index out of bounds)

//str.toUpperCase() --> converts the string to uppercase
//str.tolowerCase() --> converts the string to lowercase
console.log(str1.toUpperCase()) //PRASHANT
console.log(str2.toLowerCase()) //kumar

//str.trim() --> removes whitespace from both ends of the string
let str3 = '   Hello World!   '
console.log(str3) //   Hello World!
console.log(str3.trim()) //Hello World!

//str1.concat(str2) --> concatenates two strings(adds them together)
console.log(str1.concat(str2)) //PrashantKumar
console.log(str1 + str2) //PrashantKumar (using + operator)

//str.split(' ') --> splits the string into an array of substrings using the specified separator
console.log(str3.split(' ')) //['', '', 'Hello', 'World!', '', '', ''] (splitting by space)
console.log(str3.split('o')) //['   Hell', ' W', 'rld!   '] (splitting by 'o')
console.log(str3.split('')) //[' ', ' ', 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', ' ', ' ', ' '] (splitting by each character)

//str.replace('old', 'new') --> replaces the first occurrence of 'old' with 'new'
//str.replaceAll('old', 'new') --> replaces all occurrences of 'old' with 'new'
let str4 = 'hello world hello world'
console.log(str4) //hello world hello world
console.log(str4.replace('world', 'universe')) //hello universe hello world (only first occurrence replaced)
console.log(str4.replaceAll('world', 'universe')) //hello universe hello universe (all occurrences replaced)

//str.slice(start, end) --> extracts a section of the string and returns it as a new string
let str5 = 'JavaScript is awesome'
console.log(str5.slice(10)) //it starts from index 10 to the end --> 'is awesome'
console.log(str5.slice(0, 10)) //it starts from index 0 to index 10 (not inclusive) --> 'JavaScript'
console.log(str5.slice(-7)) //it starts from index -7 to the end --> 'awesome'
console.log(str5.slice(-7, -1)) //it starts from index -7 to index -1 (not inclusive) --> 'awesom'
console.log(str5.slice(14, 14)) //it starts from index 14 to index 14 (not inclusive) --> '' (empty string)
