function sayMyName () {
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("b");
}

sayMyName();

function addTwoNumber (number1 , number2) {
    return (number1 + number2);
}
// addTwoNumber(4,5);
const result = addTwoNumber(3,4);
console.log(`Result : ${result}`);

function loginUserMessage (username = "Hey buddy"){
    if(!username){
        console.log(`Please enter a username`);
       return ;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Ishab bro"));

function calculateCartPrice (val1 , val2 , ...number1) {          // ... works as rest operator in function parameter . 
    return number1;
}

console.log(calculateCartPrice(200,400,640,2000));


const user = {
    userName : "Hitesh",
    price    : 199
}
function handleObject (anyObject){
     console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user);
// handleObject({
//     userName : "Sam",
//     price    : 399
// })

function returnSecondValue(getArray) {
    console.log(`Username is : ${getArray[0]} and price is : ${getArray[2]}`);
    return getArray[1];
}
const myNewArray = ["Ram" , 100 , 599];
console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue(["Sham" , 456,222]));