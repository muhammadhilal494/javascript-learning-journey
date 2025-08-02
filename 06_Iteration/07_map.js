// const mynums = [1, 2, 3, 4, 5];

// const mynums2 = mynums.map((num) => {
//   return num * 2;
// });
// console.log(mynums2); 


// channing methods
const mynums = [1, 2, 3, 4, 5]; 
const mynums2 = mynums
.map( (num) => num * 2)
.map( (num) => num + 1)
.filter( (num) => num > 5)

console.log(mynums2);
