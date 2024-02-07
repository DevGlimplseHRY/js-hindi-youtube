// console.log("Ishab")

var accountUser = "Harish"
// console.log(accountUser)
// {
//     accountUser = "Sahil"
//     console.log(accountUser)
// }
// console.log(accountUser)


/* 
    Declare a variable with let keyword
    And then Make a function & change that variable's value inside the function
    then check out whether & where where variable's value changes 
    Then come on the conclusion of why var is not used bcz of issue in block/functional scope
*/


let aString = "Hey";
let secondString = new String("Hello");
// let aNumber = 1434;
console.log(aString);
console.log(typeof aString);
console.log(typeof `${aString}`);
console.log(`${typeof aString}`);
console.log(aString.__proto__);

console.log();
console.log();

console.log(secondString);
console.log(typeof secondString);
console.log(typeof `${secondString}`);
console.log(`${typeof secondString}`);
console.log(secondString.__proto__);