// // for of 

// // ["", "", ""]
// // [{}, {}, {}]

// // const arr = [1, 2, 3, 4 ,5]

// // // for (const num of arr) {
// // //     // console.log(num)
// // // }

// // const greetings = "hello World !"

// // for (const greet of greetings) {
// //     // console.log(`Each char is : ${greet}`)
// // }


// // // Maps

// // const map = new Map()

// // map.set('IN', "INDIA")
// // map.set('USA',"UNITED STATES OF AMERICA")
// // map.set('FR', "FRANCE")

// // console.log(map)

// // for (const map_values of map) {
// //     console.log(map_values)
// // }

// // for (const [map_index , map_values] of map) {       // that is known as destructring of array
// //     // console.log(`${map_index} is for ${map_values}`)
// // }

// const myObject = [{
//     userName : "siab",
//     userFullName : "isahb"
// },
// {
//     userName : "einfe",
//     userFullName : 'dkjfd kumar',
// },
// {
//     userName : " dkfjdks",
//     userFullName : "dfjdkj singh"
// }]

// for (const iterator of myObject) {
//     console.log(iterator)
// }

// myObject.forEach( (i) => {
//     console.log(i)
// })
// const mynewcogi = {
//     game1 : "hid",
//     game2 : "cahr"
// }

// for (const iterator in mynewcogi) {
//     console.log(mynewcogi[iterator])
// }

/* Note : simple ak object k upr for-in loop can be used */
// // for (const [key,value] of myObject) {
// //     console.log(`${key} is for ${value}`)
// // }


// const myNewObject = {}
// // for (const values in myObject) {
// //    console.log(values)
// // }


// const coding = ["js", "java", "swift", "python", "cpp"]

// coding.forEach( function (i) {
//     // one way to write callback function
//     // console.log(i)
// })

// coding.forEach( (i) => {
//     // 2nd way to write callback function
//     console.log(i)
// } )

// function printMe (i){
//     console.log(i)
// }

// coding.forEach(printMe);

// const coding = ["js", "java", "swift", "python", "cpp"]

// const values = coding.forEach( (i) => {
//     // console.log(i)
// })
// console.log(values)

/* HEre revision summary ends */

// Here we learn about filter in-built property/High-Order function
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (i) => i > 3 ) 
// const newNums = myNums.filter( (i) => {
//     return i>3
// }) 

// const newNums = myNums.forEach( (i) => {
//     if(i > 8) console.log(i)
// })

// const newNums = []
// myNums.forEach( (i) => {
//     if(i > 8){
//         newNums.push(i)
//     }
// })
// console.log(newNums)


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// let userBooks = books.filter( (bk) => bk.genre === 'Non-Fiction')
// // userBooks = books.filter( (bk) => { return bk.publish >= 2000})

// userBooks = books.filter( (bk) => {
//     return bk.genre === 'History' && bk.publish >= 1995
// })
// console.log(userBooks)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.map( (i) => i + 10)

/* Here we learn about chaining */

// const newNums = myNums
//                 .map( (i) => i * 10)
//                 .map( (i) => i + 1)
//                 .filter( (i) => i > 40)
// console.log(newNums)

// const myNums = [1, 2, 3]

// const initialValue = 0
// const newNums = myNums.reduce( function (accumulator,currentValue) {
//     console.log(`Accumulator value : ${accumulator} , currentValue : ${currentValue}`)
//     return accumulator + currentValue
// },initialValue)

// const newNums = myNums.reduce( (accumulator,currentValue) => {
//     console.log(`Accumulator value : ${accumulator} , currentValue : ${currentValue}`)
//     return accumulator + currentValue
// },initialValue)

// console.log(newNums)

const shoppingCart = [{
    item: "js coure",
    price: 2999
},
{
    item: "py coure",
    price: 999
},
{
    item: "mobile dev coure",
    price: 5999
},
{
    item: "data science coure",
    price: 12999
}
]

let Price = 0
// for (const iterator of shoppingCart) {
//     totalPrice += iterator.price
// }

const totalPrice = shoppingCart.reduce( (acc,item) => (acc + item.price),Price)
console.log(totalPrice)