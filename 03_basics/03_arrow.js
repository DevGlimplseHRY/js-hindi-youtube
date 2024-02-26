const user = {
    username : "ishab",
    price    : 999,

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to the website`)
        console.log(this);
    }
}
user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this);

// function chai(){
//     let username = "hitesh"
//     // console.log(this.username);      // can't use this keyword in functions
//     console.log(username);
// }
// chai();

// i just comment rest of the following code from here today .
// const chai = function () {
//     let username = "Harry";
//     // console.log(this.username);
//     // console.log(this);
//     console.log(username);
// }
// chai();

// const chai = () => {
//     let username = "ishab";
//     console.log(this.username);
//     // console.log(this);       // this keyword in arrow function gives empty object whereas traditional/classic/regular
//                                 //  function gives so many values .
//     console.log(username);
// }
// chai();

// const addTwo = (num1,num2) => {
//     return (num1 + num2);
// }
// console.log(addTwo(3,4));

// // ANOTHER WAY TO WRITE ARROW FUNCTION

// // const addTwo = (num1 , num2) => num1 + num2 ;

// // const addTwo = (num1 , num2) => (num1 + num2);

// // const addTwo = (num1 , num2) => ({username : "ishab"})

// console.log(addTwo(3,4));