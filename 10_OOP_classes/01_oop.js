// Object literal

const user = {
    username: "Hilal",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details");
        // console.log(`Username: ${username}`);
        console.log(this);
          
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // show context which is empty in this case


// const user2 = {
//     username: "Hilal",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details");
//         // console.log(`Username: ${username}`);
//         console.log(this);
          
//     }

// }


// const promiseOne = new Promise()
// const date = new Date()   // new keyword: construction function


function User( username, loginCount, isLoggesIn){
    this.username = username
    this.loginCount = loginCount;
    this.isLoggesIn = isLoggesIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    // return this
}

// const userOne = User("hilal", 22, true)
// const userTwo = User("Ahmad", 23, false)

const userOne = new User("hilal", 22, true)
const userTwo = new User("Ahmad", 23, false)

// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);






