// const name = "Ishab"
// const repoCount = 4
// // console.log(name + " " + repoCount)

// // console.log(`My name is ${name} and my repoCount is ${repoCount}`);     // String interpolation -- u make placeholder & inject values in these placeholder.

// // console.log(`My name is ${name}`)
// // console.log(`MY Name is ${name.toUpperCase()}`)

// const gameName = new String("hieiesie");
// // console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('e'))

// let string1 = "Ram";
// let string2 = string1 ;
// string2 = "Sham";


// const string3 = new String("Krishna");
// let string4 = string3 ;
// string4 = "Radha Rani"

// console.log(`${typeof string1}`);
// console.log(typeof string2);
// console.log(`${string3}`);
// console.log(`${typeof string4}`);


// doubt ye hai ki --   agar typeof function (outside) the [curly braces of backtick] use krte hai to string type btata hai
//                      vhi agar (inside) the [curly braces of backtick] use krte hai to object btata hai 
// how it is going to happen -- --what's the reason behind that 

// and jaise hm typeof use krte hai kisi bhi variable k liye to usse retuned result ko kya bolte hai --- i think it's dataType [of that variable].

// how to get [undo] /redo  list


const name = "hitesh";          // ----- behind the scene it is also invoking an object    BUT the QUESTION is {HOW ?}
const repoCount = 50 ;
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("hitesh-hc")

// 52 - 53 to inbuilt method hai strings k liye vo bhi <chrome browser k andr>

// How string become object with the help of new keyword & constructor ?

// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

const newString = gameName.substring(2,6);
/*
    The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that a string is still returned. 
    The slice() method returns an empty string if this is the case.
*/
// console.log(`${newString}`);

const anotherString = gameName.slice(-6,2);
// console.log(`${anotherString}`);

// - sign in slice() piche se index count krke then usse aage k elements count krne lgta h
// - se sirf itna hoga ki piche se utne index count krke then vha se operation shuru krega vo bhi right side / increasing side me
// slice() method k arguments me firstIndex <whether it is negative> include hota h

const newStringOne = "          hitesh.         hi";
// console.log(newStringOne);
// console.log(newStringOne.trim());

let url = "https://hitesh.com/hitsh%20choudhary";

// console.log(`${url.replace('%20','-')}`);
// console.log(`${url.includes("hitesh")}`)

console.log(gameName.split('-'));