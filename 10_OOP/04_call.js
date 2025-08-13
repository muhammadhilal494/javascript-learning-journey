function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    // setUserName(username)
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const coffee = new createUser("hilal", "tea@test.com", "123")
console.log(coffee);
