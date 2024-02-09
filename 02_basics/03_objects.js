// Literals se "singleton" nhi bnta hai
// but constructor se jb object bnate hai to tb jrur singleton se bnta h
// singleton -- means create only one instance & without singleton creates multiple instances of object 

// 2 ways to make objects -- literals OR constructor  
// no major difference between two ways BUT the only difference is of "SINGLETON".


// singleton
// Object.create         // -- making an object through constructor method 

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "Ishab",
    "full name" : "Ishab Dhillon",
   [mySym] : "mykey1",
    age :   21 ,
    location : "Haryana",
    email : "ishab@google.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser["full name"])
console.log(mySym);         // can't use string interpolation for Symbol

console.log(mySym);
console.log(JsUser["mySym"]);    // wrong way to access Symbol from object
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);
console.log(typeof mySym)
console.log(JsUser);

/* InterView question : ak symbol declare krna h & usko object me keys ki trh act krna h and print krna h */

JsUser.email = "ishab@chatGpt.com";
Object.freeze(JsUser)
JsUser.age = 33;
JsUser.email = "ishab@microsoft.com";
console.log(JsUser);

JsUser.greeting = function (){
    console.log(`Hello JS User`);
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.age}`)
}
console.log(JsUser.greeting);
console.log();
console.log(JsUser.greeting());
console.log();
console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());