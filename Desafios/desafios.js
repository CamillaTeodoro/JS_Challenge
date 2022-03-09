//! Função que retorna b % de a

// function myFunction(a, b) {
//   return (b / 100) * a;
// }

// console.log(myFunction(100, 50));
// console.log(myFunction(10, 1));
// console.log(myFunction(500, 25));

//! Função que recebe duas strings, confere se b existe em a e concatena

// function myFunction(a, b) {
//   let novaString = "";

//   if (a.indexOf(b) != -1) {
//     novaString = novaString.concat(b, a);
//   } else {
//     novaString = novaString.concat(a, b);
//   }

//   return novaString;
// }

// console.log(myFunction("cheese", "cake"));
// console.log(myFunction("plastic", "tic"));
// console.log(myFunction("Java", "Script"));
// console.log(myFunction(" think, therefore I am", "I"));

//! Recebe dois arrays e cria um objeto com key do a e value do b;

// function myFunction(a, b) {
//   let myObj = {};

//   for (let i = 0; i < a.length; i++) {
//     // const key = a[i];
//     // const value = b[i];
//     // myObj[key] = value;

//     myObj[a[i]] = b[i];
//   }
//   return myObj;
// }

// console.log(myFunction(["a", "b", "c"], [1, 2, 3]));
// console.log(myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]));
// console.log(myFunction([1, "b"], ["a", 2]));

//! Recebe duas strings e cria um objeto com chave a e valor b

// function myFunction(a, b) {
//   let myObj = {};

//   myObj[a] = b;

//   return myObj;
// }

// console.log(myFunction("a", "b"));
// console.log(myFunction("2", "l"));
// console.log(myFunction("0", "b3"));

//! Recebe um array e um numero e retorna os ultimos n itens do array

// function myFunction(a, n) {
//   return a.slice(-n);
// }

// console.log(myFunction([1, 2, 3, 4, 5], 2));
// console.log(myFunction([1, 2, 3], 6));
// console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3));

//! Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X se for o caso.

// let x = 110;

// if (x % 2 === 0) {
//   x += 1;
// }

// for (let i = 0; i < 6; i++) {
//   console.log(x);
//   x += 2;
// }

//! Recebe dois numeros, se a for menor que b divide a por b e se a for maior que b multiplica a com b.

// function myFunction(a, b) {
//   let result = 0;
//   if (a <= b) {
//     result = a / b;
//   } else {
//     result = a * b;
//   }
//   return result;
// }

// console.log(myFunction(3, 100));
// console.log(myFunction(90, 45));
// console.log(myFunction(8, 20));
// console.log(myFunction(2, 0.5));

//! Write a function that takes an array (a) and a value (b) as argument. The function should clean a from all occurrences of b. Return the filtered array

// function myFunction(a, b) {
//   let myArray = a.filter((value) => value !== b);

//   return myArray;
// }

// console.log(myFunction([1, 2, 3], 2));
// console.log(myFunction([false, "2", 1], false));
// console.log(myFunction([1, 2, "2", 1], 1));

//! Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order

// function myFunction(arr) {
//   return arr.sort().reverse();
// }

// console.log(myFunction([1, 3, 2]));
// console.log(myFunction([4, 2, 3, 1]));

//! Write a function that takes as argument a date instance (a) and a number (b). It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

// function myFunction(a, b) {
//   let days = b * 24 * 60 * 60 * 1000;

//   let time = Date.parse(a);

//   return time + days;
// }

// console.log(myFunction(new Date(Date.UTC(2000, 0o1, 0o1)), 31));

// console.log(myFunction(new Date(Date.UTC(2000, 0o1, 0o1)), 10));

// console.log(myFunction(new Date(Date.UTC(2000, 0o2, 28)), 2));

//! Write a function that takes an object as argument. It should return an object with all original object properties except for the property with key 'b'

// function myFunction(obj) {
//   const myObj = delete obj.b;

//   return obj;
// }

// console.log(myFunction({ a: 1, b: 7, c: 3 }));
// console.log(myFunction({ b: 0, a: 7, d: 8 }));
// console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 }));

//! Write a function that takes three elements of any type as arguments. Create a Set from those elements. Return the result

// function myFunction(a, b, c) {
//   const mySet = new Set([a, b, c]);
//   return mySet;
// }

// console.log(myFunction(1, "b", 3));
// console.log(myFunction(NaN, null, false));
// console.log(myFunction("a", ["b"], { c: 3 }));

//! Recebe um set e um valor e retorna o set com o valor deletado

// function myFunction(set, val) {
//   set.delete(val);
//   return set;
// }

// console.log(myFunction(new Set([1, 2, 3]), 1));
// // Expected new Set([2, 3])
// console.log(myFunction(new Set("12345"), "3"));
// // Expected new Set(['1', '2', '4', '5'])
// console.log(myFunction(new Set([1, 2, 3]), 4));
// // Expected new Set([1, 2, 3])

//! Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'

// function myFunction(obj) {
//   const myObj = obj["prop-2"];
//   return myObj;
// }

// console.log(myFunction({ one: 1, "prop-2": 2 }));
// console.log(myFunction({ "prop-2": "two", prop: "test" }));

//! Write a function that takes two date instances as arguments. It should return true if the dates are equal or false otherwise.

// function myFunction(a, b) {

//     return a.getTime() === b.getTime()

//     // const dateOne = Date.parse(a);
//     // const dateTwo = Date.parse(b);

//     // if (dateOne === dateTwo) {
//     //     return true
//     // } else {
//     // return false;
//     // }
//   }

//   console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
//   console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
//   console.log(myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

//! Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b

// function myFunction(a, b) {

//   let xLength = b.match(/a/gi).length;

//   return xLength;
// }

// console.log(myFunction('m', 'how many times does the character occur in this sentence?'));
// console.log(myFunction('h', 'how many times does the character occur in this sentence?'));
// console.log(myFunction('?', 'how many times does the character occur in this sentence?'));
// console.log(myFunction('e', 'how many times does the character occur in this sentence?'));

//! Write a function that takes an object (a) as argument. Return the sum of all object values

function myFunction(a) {
  const arr = Object.values(a);
  console.log(arr);
  return Object.values(a).reduce((sum, cur) => sum + cur, 0); 
}
console.log(myFunction({ a: 1, b: 2, c: 3 }));
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }));
console.log(myFunction({ w: 15, x: 22, y: 13 }));
