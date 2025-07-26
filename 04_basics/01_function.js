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

// console.log(loginUserMessage("Hilal"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

//Rest operator
function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 100, 500, 300));

const user = {
    username: "Hilal",
    // price: 299
    prices: 299
}

function handleOject(anyObject){
    console.log(` User name is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleOject(user)
// handleOject(
//     {
//         username: "Hilal",
//         price: 399
//     }
// )

const arr = [100, 200, 300, 400]

function handleArray(getArray){
    return getArray[2]
}

// console.log(handleArray(arr));
console.log(handleArray([200, 500, 600, 100]));
