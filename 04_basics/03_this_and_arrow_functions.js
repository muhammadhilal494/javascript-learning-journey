const user = {
    name: 'hilal',
    age: 22,
    // this keyword refers to the object itself
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(`This refers to: ${this}`,this); // 'this' refers to the user object
    }
}

// user.greet(); // Hello, my name is hilal and I am 30 years old.
// user.name = 'Ahmad';
// user.greet(); // Hello, my name is Hilal Ahmed and I am 30 years

// console.log(`This refers to: ${this}`, this); // 'this' refers to the global object in non-strict mode

// function showThis() {
//     let username = 'Hilal';
//     console.log(`This refers to: like variable ${this} and like object`, this); // 'this' refers to the global object in non-strict mode
//     console.log(`UserName`, this.username); // 'username' is defined in this scope
// }

// showThis(); // This refers to: [object Window] Window { ... }


// const chai = () => {
//     console.log(`This refers to: ${this}`, this); // 'this' refers to the global object in non-strict mode
//     console.log(`This is a function`, this);
// }

// chai(); // This refers to: [object Window] Window { ... } and 'this' refers to the global object in non-strict mode


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicitly returns the result
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );

// how to return an object in implicit function return
const addTwo = (num1, num2) => ({ result: num1 + num2 });

// console.log(addTwo(5, 2)); // 7

const array = [1, 2, 3, 4, 5];

// array.forEach(function(){})
// array.forEach(() => () )

