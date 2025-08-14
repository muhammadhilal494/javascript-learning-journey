class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);    
    }

    static createId(){
        return `123`
    }
}

const hilal = new User("hilal")
// console.log(hilal.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const infinix = new Teacher("infinix", "infinix@example.com")
infinix.logMe();
console.log(infinix.createId())