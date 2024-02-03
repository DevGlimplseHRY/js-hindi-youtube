// console.log( 2 > 1) ; 
// console.log( 2 < 1) ;
// console.log( 2 == 1) ;
// console.log( 2 != 1) ;
// console.log( 2 >= 1) ;
// console.log( 2 >= 2) ;

// console.log("2" > 1) ;
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null == / === 0);    // -- Unpredictable result    -- as bcz incompatable comparison
   
// *inconsistency

/* 
    The reason is that an equality check == and comparisons > < >= <= work differently .
    Comparisons convert null to a number , treating it as 0 .
    That's why (13) null >= 0 is true and  (11) null > 0 is false .
*/

// console.log(undefined > 0)
// console.log("2" === 2)       // =>   === CHECK not only operands equality but alos dataTypes of both operands



// clean code get priority for a developer