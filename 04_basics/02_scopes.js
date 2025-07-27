// let a = 10
// const b = 20
// var c = 30

// var c = 300

let a = 400

// {}: scope block
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // c = 30
    // console.log(`Inside block scope: ${a}`);
    

}

// for (let c = 0; c < 5; c++) {
//     console.log(`Inside for loop: ${c}`);
// }

// console.log(a);
// console.log(b);
// console.log(c);


//Nested scopes
// function outerFunction() {
//     const username = 'Hilal';

//     function innerFunction() {
//         const website = 'hilal.com';
//         console.log(`Username: ${username}`);
//     }
    
//     // console.log(website); // This will throw an error because 'website' is not defined in this scope
//     innerFunction(); // Call the inner function to access 'website'
// }    
// outerFunction(); // Call the outer function to execute the code

// if (true) {
//     const username = 'Hilal';
//     if (true) {
//         const website = 'hilal.com';
//         console.log(`Username: ${username}`);
//     }
//     // console.log(website); // This will throw an error because 'website' is not defined in this scope

// }


//+++++++++++++++ intersection of scopes +++++++++++++++++++

// add(5); // 15, not throwing an error because 'add' is hoisted

// function add(x) {
//    return x + 10;
// }


addTwo(5); // 7 . // This will throw an error because 'addTwo' is not defined yet
const addTwo = function(x){
    return x + 2;
}

addTwo(5); // 7
