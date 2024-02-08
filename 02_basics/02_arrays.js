const marvel_Heros = ["Thor" , "Ironman", " Spiderman" ]; 
const dc_Heros = ["Superman" , "flash" , "batman"];

console.log(marvel_Heros.push(dc_Heros));
console.log(marvel_Heros.toString());
console.log(typeof marvel_Heros);
console.log(marvel_Heros[3][2]);

const all_Heros = marvel_Heros.concat(dc_Heros);
console.log(all_Heros);
console.log(marvel_Heros);

const all_new_heros = [...marvel_Heros , ...dc_Heros];      // Spread operator (...) => with it multiple values can be concatinated
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7,[4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(another_array);
console.log(real_another_array);

console.log(Array.isArray("Ishab"));
console.log(Array.from("Ishab"));
console.log(Array.from({name : "Ishab"}));      // in this case we have to specify that from what we want to make an array :
                                                // means from keys or values or both or some other thing .
                                                // OTHERWISE it returns an empty array
let score1 = 100 ;
let score2 = 200 ;
let score3 = 300 ;

console.log(Array.of(score1, score2, score3));