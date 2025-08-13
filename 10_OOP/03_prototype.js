// let myName = 'hilal'
// let myName = 'hilal    '

// console.log(myName,length);
// console,log(myName.trueLength)

let myHero = ["Usman", 'Umar']

let heroPower = {
    usman: "haya",
    umar: "Insaf",
    muslim: "Ayman",

    getMuslimPower: function(){
        console.log(`Muslim power is ${this.muslim}`);
        
    }
}

Object.prototype.hilal = function(){
    // console.log(`hilal is present`);
    
}

Array.prototype.salamHilal =  function(){
    // console.log(`hilal say Salam`);
    
}

heroPower.hilal()
myHero.hilal()

// heroPower.salamHilal()
myHero.salamHilal()


// Inheritance
const User = {
    name: "Chai",
    email: "chai@exapmle.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __prototype__: TeachingSupport
}

Teacher.__prototype__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "HilalAhmad"

String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);    
}

anotherUsername.truelength()
'hilal'.truelength()
'iceTea'.truelength()