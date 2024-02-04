//  Primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt


// Reference (Non Primitive)

// Arrays , Objects , Functions




  
// const id = Symbol("134")
// const anotherId = Symbol("134");
// console.log(id === anotherId)

//const bigNumber = 34343435634664n

// const heros = ["shaktiman" , "naagraj" , "doga"] ;
// let myobj = {
//     name : "Ishab",
//     age : 21
// }

// const myFunction = function () {
//     console.log("Hello World !")
//     "Hello Word"
// }
// console.log(typeof myFunction)               // --   typeof specifies [return]/result type 
// console.log(myFunction)




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//          Memory

// Stack            and             Heap 


// Stack (Primitive)            Heap (Non-Primitive)


// Call by VALUE                // Call by REFERENCE    

let myYoutubeChannel = "hiteshchoudharydotcom"
let anotherYoutubeChannel = myYoutubeChannel ;

anotherYoutubeChannel = "ishabdhillondotcom"
// console.log(myYoutubeChannel);
// console.log(anotherYoutubeChannel);


let userOne = {
    email : "hitesh@google.com",
    upiId : "ishab@ybl"
}

let userTwo = userOne;
userTwo.email = "ishab@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// c:\Users\ishab\OneDrive\Documents\Stack & Heap in JavaScript.png