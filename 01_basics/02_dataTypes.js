"use strict" ; // treat all JS code as newer version (of javascript)
                        // sabko ak standard milna chaiye ki purane code ko naye code ki trh treat kro
                
// alert(3 + 3)     // we are using node.js, not browser

console.log(3 
    + 
     3)  // code readabilty should be high

// console.log("Hitesh")

let name = "Hitesh"
let age = 20 
let isLoggedIn = false


/* Mainly three types of dataTypes in javascript : 1.String
                                                   2.Number
                                                   3.boolean
*/

// number => 2 to the power of 53
// bigint             -- bigInt is also a function
// string => ""
// boolean => true/false
// null => standalone value             [dataType bhi h]        
                                                            /*  for example to get the temperature from server 
                                                                  null is best option if server is down rather than showing/using
                                                                    zero/0 value
                                                                */
                                /*    let state = ""  yha state ki [value] null h , lekin iski dataType null nhi h jst bcz 
                                                        iski dataType to define ho chuki h ki ye ak string h       
                                  */
// undefined => value not assigned to the variable after declaration
// symbol => unique       ////// like we use for unique components in figma & react 

// ye upr to ho gyi PRIMITIVE dataTypes ki baat

// object

// console.log(typeof undefined)  // undefined
// console.log(typeof null)    // object
// console.log(typeof BigInt)  // function / bigInt



// undefined apne aaap me ak type h     
// lekin null ak object h na ki type &&&& it can be called flaw/error or feature of javascript