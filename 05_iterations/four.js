const myObject = {
    js : 'javaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shorcut is for ${myObject[key]}`);
}

const programming = ["java","js", "py", "rb", "cpp"];

for (const key in programming) {
    // console.log(`${key} for programming in ${programming[key]}`);
}


//  cannot iterate on maps using for in loop
// const map = new Map();
// map.set('IN' , "INDIA")
// map.set('USA' , "United States of America")
// map.set('Fr' , "France")

// for (const key in map) {
//    console.log(key);
// }