// how data is placed in memory
// in this base datatypes have two types
// Primitive datatype and reference/non-premitive datatypes

//Premitive: call by value: copy changes
// 7 types: String, Number, Boolean, null, underfined, Symbol, Bigint
// symbol: to make unique value

const score = 100
const score2 = false
// const score3:Number = 100 // typescripte

const scoreValue = 100.4
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 36353735227654n



// Reference (Non primitive) : call by reference
//JS master: master the object and brower event

// Array, Objects, Functions

const heros = ["sultan", 'khan', "osman"]

let obj = {
    name: "Hilal",
    age: 22
}

const myFunction = function(){
    console.log("Hello World")
}
 
// console.log(typeof myFunction)

//##################################################

// Stack (Premitive): value copy , Heap (Non-Primitive): reference

let myGitHubName = "muhammadhila494"

let anotherName = myGitHubName
anotherName = "chaiaurJS"

// console.log(anotherName);
// console.log(myGitHubName);

let user = {
    email: "hilalahmad494520@gmail.com",
    age: 22
}

let userTwo = user
userTwo.email = "muhammadhilal494513@gmail.com"

console.log(userTwo.email);
console.log(user.email);


