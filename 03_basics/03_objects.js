// object declaration: object way and literal way
// singleton

// Object.create

//object literals

const mySym = Symbol("key1")

const User = {
    name: "Hilal",
    // "name": "Hilal" // sytem process
    "full name": "Muhammad hilal",
    // mySym: "mykey1", //not working
    [mySym]: "mykey1", // correct syntax
    age: 22,
    location: "Hangu",
    email: "hilalahmad494520@gmail.com",
    isLoggedIn: false,

}
// myArray = ["h", "i"]
// myArray[0]

// console.log(User.email); // first way
// console.log(User[email]); // not process b/c email is string
// console.log(User["email"]); // best way
// console.log(User."full name");// not access
// console.log(User["full name"]); //Best way

// console.log(User.mySym);  // wrong syntax
// console.log(typeof User.mySym); 

// console.log(User[mySym]);
// console.log(typeof User[mySym]);

// User.email = "muhammadhilal494513@gmail.com"
// Object.freeze(User) // Not changing propegate
// User.email = "hilal123@gmail.com"
// console.log(User);

// User.greeting = function() {
//     console.log("Hey! Js User");
// }

// console.log(User.greeting);
// console.log(User.greeting());

User.greetingTwo = function() {
    console.log(`Hey! Js User, ${this.name}`);
}
console.log(User.greetingTwo());








