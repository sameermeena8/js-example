const accountId = 123456
let accountEmail = "soljier143@gmail.com" 
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "seenu143@gmail.com"
accountPassword = "090909"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

