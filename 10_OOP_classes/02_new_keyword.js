function mmultiplyBy5(num){
    return num*5

}

mmultiplyBy5.power = 3

console.log(mmultiplyBy5(5));
console.log(mmultiplyBy5.power);
console.log(mmultiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
