let x = 10
console.log(x)
let y = 20
console.log(y)
console.log(x + y)

const accountId = 144553
let accountEmail = 'prashant@google.com'
var accountPassword = '12345'
accountCity = 'Patna'
let accountState

// accountId = 2 // not allowed

accountEmail = 'hc@hc.com'
accountPassword = '21212121'
accountCity = 'Bengaluru'

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
])
