//basic string
"hello" + "world"

//Programing string
const name = "hilal"
const repoCount = 29

// console.log(name + repoCount + "Value");

//Best way of String: String intropolation
// console.log(`Hello my name is  ${name} and my rep count is ${repoCount}`);

//Sting decalartion 2nd method
//it declare like a object
const gameName = new String('Hilal-MH')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

const newGame = gameName.substring(0, 3)
// console.log(newGame);

const anotherString = gameName.slice(-6, 4)
// console.log(anotherString);

const newStringOne = "    Hilal   "
// console.log(newStringOne);
// console.log(newStringOne.trim())

const url = "https://hilal.com/hilal%10 ahmad"
// console.log(url.replace('%10', '-'));
// console.log(url.includes('hilal'));
// console.log(url.includes('bilal'));

const gameNameAnother = "a quick brown fox jump over"
// console.log(gameNameAnother.split(' '));






