// const promiseOne = new Promise(function(resolve,reject){
//     // Do an aync task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is complete")
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         console.log("Async task 2");
//         resolve();
//     }, 1000);
// }).then(() =>{
//     console.log("Async 2 resolved")
// })

// const promiseThree = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve({username : 'chai', email : 'chai@example.com'})
//     }, 1000);
// })
// promiseThree.then((user) =>{
//     console.log(user)
// })

// const promiseFour = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       let error = true;
//       if(!error){
//         resolve({username : 'hitesh' , password : '123'})
//       } else{
//         reject('Error : Something went wrong')
//       }
//     }, 1000);
// })
// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=> console.log('The promise is either resolved or rejected'))

// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username : "javascript",pasword : "123"})
//         } else{
//             reject('Error : Js went wrong')
//         }
//     }, 1000);
// });

// async function consumePromiseFive() {
//    try{
//      const response = await promiseFive
//      console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()

// async function getAllResult(){
//     try{
//     let response = await fetch("https://randomuser.me/api")
//     const data = await response.json()
//     console.log(data);
//     } catch(error){
//         console.log("E: ",error)
//     }
// }
// getAllResult();


// my mind of practice code to write 76 to 85 line no async await code with the help of promises
/* const promiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        let response = fetch("https://randomuser.me/api")
        if(response){
            resolve(response)
        } else{
            reject('May be not get response from api')
        }
    }, 1000);
})
promiseSix
    .then((user) => { 
        console.log(user)
        return user.json()
     })
     .then((data)=>{
        console.log("data",data);
     })
    .catch((error) => { console.log("E: ", error) })
*/

// short way to do same task of line number 88 to 107
fetch("https://randomuser.me/api")
.then((response)=> response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))
