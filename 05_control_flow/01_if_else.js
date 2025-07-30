// if statment


// if (true){
//     console.log("True statment body");
    
// } // executed this body


// if (false){
//     console.log(" False statment body");
    
// } // Not executed this body


// const isUserloggedIn = true
// if (isUserloggedIn){

// }


// comparisan operators
//  <, >, <=, >=, ==, !=, ==


// if ( 2 < 3){
//     console.log("executed 2 < 3");
// }


// const temprature = 32;
// if (temprature > 40){
//     console.log("Temprature is greater than 40");
// } else {
//     console.log("Temparture is less than 40");
// }


// const score = 100
// if (score > 50) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }


// implicit scope
// const balance = 100
// if (balance > 50) console.log("test");


// const balanceTwo = 100
// if (balanceTwo > 50) console.log("test"),
// console.log("test 2");


// Nested conditional statment
// const marks = 500
// if (marks < 500){
//     console.log("Marks less than 500");    
// }else if (marks > 500){
//     console.log("Marks greater than 500");    
// }else{
//     console.log("Marks is equal to 500");
// }


const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (isUserloggedIn && debitCard){
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In");
}
