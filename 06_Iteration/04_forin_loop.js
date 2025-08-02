// +++++++++++++++++++++++++ Object iteration +++++++++++

// forin loop

// const myLanguages = {
//     js: "javascript",
//     cpp: "c++",
//     rb: 'ruby',
//     swift: 'swift by apple'
// }
// for (const key in myLanguages) {
//     console.log(`${key} shortcut is for ${myLanguages[key]}`); 
// }


// const programming = ['js', 'cpp', 'py', 'java']
// for (const key in programming) {
//     console.log(programming[key]);
// }


// map() is not iteratable

const map = new Map()
map.set('PK', 'Pakistan')
map.set("AF","Afghanistan")
map.set('PK', 'Pakistan')
for (const key in map) {
    console.log(key); 
}