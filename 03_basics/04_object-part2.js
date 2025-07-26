// object singleton
const tinderUser = new Object()
// const tinderUser = {} // not singleton

tinderUser.id = "1234qwer"
tinderUser.name = "Hilal"
tinderUser.age = 22

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Hilal",
            lastname: "Ahmad"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname);
// console.log(regularUser.fullname?.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} target obj
const obj3 = {...obj1, ...obj2} // spread operator

// console.log(obj3);

const users = [ 
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 2,
        email: "some@gmail.com"
    },
    {
        id: 3,
        email: "some@gmail.com"
    },
]

users[0].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));
// console.log(tinderUser.hasOwnProperty('nameeee'));

const course = {
    coursename: "Js",
    price: "999",
    courseInstructor: "Hilal"
}

// course.courseInstructor //

const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
// console.log(instructor);

// React Concept
// const navbar = (props.company) => {

// }
// const navbar = ({company}) => {

// }
// navbar(company = "AMFAH")

// Api concept
//JSON(JavaScript Object Notation) : object without name

//API in json format
// {
//     name: "hilal",
//     coursename: "JS",
//     price: "free"
// }

// APi in array format
// [
//     {},
//     {},
//     {},
// ]

