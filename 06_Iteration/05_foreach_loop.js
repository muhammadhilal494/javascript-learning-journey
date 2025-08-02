// foreach loop

// const coding = ['js', 'ruby', 'java', 'cpp', 'python']
// coding.forEach(function (item) {
//     console.log(item);  
// })


// const coding = ['js', 'ruby', 'java', 'cpp', 'python']
// coding.forEach((item) => {
//     console.log(item);  
// })


// const coding = ['js', 'ruby', 'java', 'cpp', 'python']
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// const coding = ['js', 'ruby', 'java', 'cpp', 'python']
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr); 
// })


const mycoding = [
    {
        Name: "c++",
        FileName: 'cpp'
    },
    {
        Name: "python",
        FileName: 'py'
    },
    {
        Name: "javascript",
        FileName: 'js'
    }
]

mycoding.forEach( (item) => {
    console.log(item.Name);
})
