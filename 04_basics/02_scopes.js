// let a = 10
// const b = 20
// var c = 30

// var c = 300

let a = 400

// {}: scope block
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // c = 30
    console.log(`Inside block scope: ${a}`);
    

}

// for (let c = 0; c < 5; c++) {
//     console.log(`Inside for loop: ${c}`);
// }

console.log(a);
// console.log(b);
// console.log(c);
