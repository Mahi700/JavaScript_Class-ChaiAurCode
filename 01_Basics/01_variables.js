const accountId = 322345
let accountEmail = "mahdi@gmail.com"
var accountPassword = "12345"
accountCity = "Dhaka"
let accountState;

// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "mahi@gmail.com"
accountPassword = "21212121"
accountCity = "chittagong"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])