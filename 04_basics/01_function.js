// function

// console.log("H");
// console.log("i");
// console.log("l");
// console.log("a");
// console.log("l");

function myName(){
    console.log("H");
    console.log("i");
    console.log("l");
    console.log("a");
    console.log("l");
}

// myName()

// parameters
// function sum(num1, num2){
//    console.log( num1 + num2);
   
// }

// sum(3, 6)  // arguments
// sum(3, "6")
// sum(3, "a")
// sum(3, null)

// const result = sum(4, 4)
// console.log("Result ", result );

function sum(num1, num2){
//    let result = num1 + num2
//    return result  

    return num1 + num2
   console.log("Hilal"); // un reachable code
}

const result = sum(4, 4)
// console.log("Result ", result );

function loginUserMessage(username){
    // if(username === undefined)
    // {
    //     console.log("Please enter a username");
    //     return
        
    // }
    if(!username)
    {
        console.log("Please enter a username");
        return
        
    }
    return ` ${username} just logged in`
}

function loginUserMessage(username = "default Hilal"){
    if(!username)
    {
        console.log("Please enter a username");
        return    
    }
    return ` ${username} just logged in`
}

console.log(loginUserMessage("Hilal"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());
