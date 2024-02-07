//  array

const myArr = [0,1,2,3,4,5];
console.log(myArr);

const myHeros = ["shaktiman","nagraaj"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr2[2]);

//  Array methods   

myArr.push(7);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(8)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.includes(91));

console.log(myArr.indexOf(9));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);


//  slice , splice

console.log("A ",myArr);

console.log();

const mynewArray1 = myArr.slice(1,3);
console.log(mynewArray1);
console.log("B " , myArr);

console.log();

const mynewArray2 = myArr.splice(1,3);
console.log(mynewArray2);
console.log("C " , myArr);