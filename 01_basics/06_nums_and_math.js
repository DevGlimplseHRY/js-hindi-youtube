const score = 400 
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));

// REmember it is best to show/use 2 precison values to the client while using toFixed() function .

const otherNUmber = 123.89 ;
// console.log(otherNUmber.toPrecision(3));

// toPrecision() is very critical & crucial function -- So use it very carefully 😊

const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-IN'));
// by default it uses US base counting method but by specifying 'en-IN' ,it use indian calculation theme


// ++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++

// let array = [4,3,5,1,2];
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(2.5));
// console.log(Math.ceil(4.01));
// console.log(Math.floor(4.99));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,10));
// console.log(Math.min(2,3,4,1));
// console.log(Math.max(2,4,1,5));

// Task *  ==>  console.log(Math.min(array));        -- hOw to do it ?

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.round(Math.random() * 10) + 1);

// const minValue = new Number(Number.MIN_VALUE);
// console.log(minValue);

const min = 10 ; 
const max = 20 ;

console.log(Math.random() * (max - min + 1));
console.log(Math.round(Math.floor() * (max - min + 1)) + min);         //  -- important formula or line 