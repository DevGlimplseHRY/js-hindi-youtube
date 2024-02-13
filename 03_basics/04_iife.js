// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife
    console.log(`DB CONNECTED `);
})();                              //global scope k pollution ko htane k liye iife ka use kiya jata h

( (name) => {
    // unnamed/simple iife  
    console.log(`DB CONNECTED TWO ${name}`);
})('ishab');