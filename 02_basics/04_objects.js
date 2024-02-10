// // NOw we read about SINGLETON

// const tinderUser = new Object();
// // const tinderUser = {};

// tinderUser.id = "123abc";
// tinderUser.name = "Sammy";
// tinderUser.isLoggedIn = false ;


// // my mind code
// tinderUser.adress = {
//     Village : "Khanpur Khurd",
//     City    : "Gohana",
//     State   : "Haryana",
//     Phone_number :{
//         userPhoneNumber : 8708269843,
//         userFatherPhoneNumber : 9255561977
//     }
// }

// console.table(tinderUser);

// const regularUser = {
//     email : "some@google.com",
//     fullname : {
//         fullnameOfUser : "HiteshChoudhary",
//         userfullname : {
//             firstname : "Hitesh",
//             lastname  : "Choudhary"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.lastname);
// console.table(regularUser);

// const obj1 = {1:"a" , 2 :"b"};
// const obj2 = {3:"c" , 4 :"d"};
// // const obj3 = (obj1 , obj2) ;
// // const obj3 = Object.assign({}, obj1, obj2);       // first parameter value in assign method is use as target object & rest of the following objects are take as source objects.
// const obj3 = {...obj1 , ...obj2};
// console.log(obj3);
// console.table(obj3);

// const users = [
//     {
//         id : 1,
//         email : "h@google.com"
//     },
//     {

//     },
//     {

//     }
// ]
// console.log(users[0].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));        // this way it makes object an array so that we can easily iterate on it
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "js in hindi",
    coursePrice : 999 ,
    courseInstructor : "hitesh"
}
// console.log(course.courseInstructor);
const {courseInstructor : Instructor} = course ;
// console.log(courseInstructor);       // now it doesn't work as we destructured it
console.log(Instructor);

// json format
// {
//     "name " : "ishab",
//     "age "  :  21
// }

// [
//     {},
//     {},
//     {}
// ]