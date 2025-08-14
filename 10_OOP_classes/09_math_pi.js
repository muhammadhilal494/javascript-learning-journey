const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: "ginger chai",
    price: 200,
    isAvailable: true,

    orderChai: function(){
        console.log(`chai not make`);
        
    }
}

console.log(chai);

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (const [key, value] of chai) {
//     console.log(`${key} : ${value}`);    
// }

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`);
    }    
}

