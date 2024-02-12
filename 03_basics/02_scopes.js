// global scope
var c = 300
let a = 12

if (true) {
    // block scope

    let a = 10;
    const b = 20;
    // var c = 30 ;
    console.log(a);
}

console.log(a);
console.log(b);
// console.log(c);

function one() {
    const username = "Hitesh";
    function Two() {
        const website = "youtube"
        console.log(username);
    }

    console.log(website);

    Two()
}
one();


if (true) {
    const username = "ishab"
    if (username === "ishab") {
        const website = " facebook"
        console.log(username + website);
    }
    console.log(website);
}
console.log(username);


// +++++++++++++++++++   interesting   ++++++++++++++++++++++ //

console.log(addOne(5));
function addOne(num) {
    return (num + 1)
}


// console.log(addTwo(5));          // cannot use variable assigned function before initialization
const addTwo = function (num) {
    return (num + 2);
}

console.log(addTwo(5));
