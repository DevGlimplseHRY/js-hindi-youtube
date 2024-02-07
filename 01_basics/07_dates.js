//  Dates

let newDate = new Date();
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toISOString());
// console.log(newDate.toJSON());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleString());


// let myCreatedDate = new Date(2024,0,4);
// let myCreatedDate = new Date(2024,0,4,5,3);
let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))

// console.log(myDate);
// console.log(myDate.getMonth() + 1);
// console.log(myDate.getFullYear());

console.log(newDate.toLocaleString('default',{
                weekday : "long"
            }))