class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@example.com", "123")

chai.addCourse()

const maslaChai = new User("masalaChai")

// maslaChai.addCourse() // not access
maslaChai.logMe()

// console.log(chai === maslaChai); // not equal
// console.log(chai === Teacher); //not equal

console.log(chai instanceof User);


