// Reduce method

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce( function (accumulator, currentValue) { 
//     console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
//     return accumulator + currentValue
//   },  3
// );
// console.log(sum); 


// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => { 
//     console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
//     return accumulator + currentValue
//   },  3
// );
// console.log(sum); 


// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 3);
// console.log(sum);


const shoppingCart = [
  { name: 'Apple', price: 1.2, quantity: 3 },
  { name: 'Banana', price: 0.5, quantity: 5 },
  { name: 'Orange', price: 0.8, quantity: 2 }
];
const totalCost = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0);
console.log(`Total cost: $${totalCost.toFixed(2)}`);
