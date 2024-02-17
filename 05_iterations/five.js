const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// coding.forEach( function (val){         // this () is known as callback function 
//     console.log(val)
// })

// console.log();

// coding.forEach( (item) => {
//     console.log(item)
// }) 

// function printMe (item){
//     console.log(item)
// }

// coding.forEach(printMe);        // just pass reference of function , not execute the function

// coding.forEach( (item , index , arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : ".java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item)
    console.log(item.languageFileName);
})