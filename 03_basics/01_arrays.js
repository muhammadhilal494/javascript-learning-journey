// Array

const myArr = [0, 1, 2, 3, 4, 5]
//MDN docs

// console.log(myArr["one"]); // not allow
// console.log(myArr[0]); // zero index

// shallow copies and deep copies
// shallow copies: share same reference
// deep copies:  not share same reference

const myHeros = ["khan", "umar Muhtar"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[0]);

// Array Methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop() // last value remove
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift(9)
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(23));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
// console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // splice portion extract
// console.log(myn2);
// console.log("C", myArr);

// Prototype is the super power of javascripte












