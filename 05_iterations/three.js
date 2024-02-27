// for of

["", "" , ""]
[{}, {} , {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is : ${greet}`);
}


// Maps

const map = new Map();
map.set('IN' , "INDIA")
map.set('USA' , "United States of America")
map.set('Fr' , "France")

// map.set('IN', "UAE")        // it changes the previous value of key 
console.log(map);

// for (const mapping of map) {
   for (const [key,value] of map){          //  Destructuring in array
    // console.log(map);
    console.log(key, ":-", value);
}

const myObject = {
    game1 : "NFS",
    game2 : "Spiderman"
}

myObject.forEach( (values) => {
    console.log(values);
});
// for (const games of myObject) {
//     console.log(games)
// }
// for (const [key , value] of myObject) {          // for of not working for objects
//     console.log(key ,":-", value);   
// }

let newString = ""
const greeting = "Hello bhai"
for (const k_khya of greeting) {
    newString += k_khya
    // console.log(k_khya);
}
// console.log(newString);