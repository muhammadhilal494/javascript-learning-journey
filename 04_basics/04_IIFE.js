// Immediately Invoked Function Expression (IIFE)

// function dbconnect() {
//     console.log("Database connected");
// }
// dbconnect(); // Database connected


// Using IIFE to execute a function immediately
(function() {
    console.log("Database connected");
})(); // Database connected 
// This is an IIFE (Immediately Invoked Function Expression)


//IIFE arrow function
(() => {
    console.log("Database connected Two");
})(); // Database connected
// This is an IIFE arrow function
// semicolon is optional but recommended to avoid issues with minification or concatenation of scripts


// IIFE with parameters
(function(name) {
    console.log(`Hi, ${name}!`);
})("Hilal"); // Hello, Hilal!
// This IIFE takes a parameter and executes immediately with the provided argument


// named IIFE
(function greet(name) {
    console.log(`Asalam Aliakum, ${name}!`);
})("Hilal"); // Hello, Hilal!
// This is a named IIFE, which can be useful for debugging purposes