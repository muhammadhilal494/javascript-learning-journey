const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, newtwork
    setTimeout(function(){
        console.log('Async task is complete');     
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(reslove, reject){
    setTimeout(function(){
        reslove({user: "Hilal", email: "hilal@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            reslove({username: "Hilal", password: "123"})
        }else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
    
}).then(function(username){
    console.log('thening username ', username);

}).catch(function(error) {
    console.log(error);
    
}).finally(() => console.log("The promise is either resloved or rejected")
)



const promiseFive = new Promise((reslove, reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            reslove({username: "JS", password: "321"})
        }else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumedPromiseFive() {
    try {
            const response = await promiseFive 
            console.log(response)
            const data = await response.json() 
    } catch (error) {
        console.log(error);
        
    }
}

consumedPromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch()
//         const data = await response.json()        
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error);
//     }
    
// }

// getAllUsers()'https://jsonplaceholder.typicode.com/users'



fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)

