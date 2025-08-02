const accountId = 1234123
let accountEmail = 'muhammadhilal494513@gmail.com'
var accountPassword = "12345"
accountCity = "Thall"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hilalahmad494520@gmail.com"
accountPassword = "98765"
accountCity = "Hangu"


console.log(accountId);
console.table([accountId, accountEmail,accountPassword,
    accountCity
])

/*
Prefer not to use var because 
of issue in block scope and functional scope
*/

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);

