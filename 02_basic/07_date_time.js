// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2025, 0, 23)
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2025, 0, 23, 5, 3)
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("2025-07-23")
//  console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("07-23-2025")
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.getTime());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // For seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: ''
})


