const coding = ['js', 'ruby', 'java', 'cpp', 'python']

// const values = coding.forEach((item) => {
//   console.log(item)
// })
// console.log(values) // undefined

// The forEach method does not return a value, it simply executes the provided function once for each array element.

// const values = coding.forEach((item) => {
// //   console.log(item)
//   return item
// })
// console.log(values) // undefined


// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newnums = mynums.filter( (num) => num > 4)
// console.log(newnums) // [5]


// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newnums = mynums.filter( (num) => {
//     return num > 4
// })
// console.log(newnums) // [5]


// Using filter to create a new array with numbers greater than 4

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num)
//   }
// })
// console.log(newNums) 


const books = [
    { title: 'Book A', price: 10, genre: 'Fiction', rating: 4.5 },
    { title: 'Book B', price: 15, genre: 'Non-Fiction', rating: 4.0 },
    { title: 'Book C', price: 20, genre: 'Fiction', rating: 4.8 },
    { title: 'Book D', price: 25, genre: 'Science', rating: 3.5 },
    { title: 'Book E', price: 30, genre: 'Fiction', rating: 4.2 }
]

// const userBooks = books.filter((book) => {
//     return book.genre === 'Fiction' && book.rating > 4.0
// })
// console.log(userBooks)

const userBooks = books.filter((book) => book.genre === 'Science' && book.rating > 4.0)
console.log(userBooks)

