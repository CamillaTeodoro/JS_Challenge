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

// function myFunction() {}

// console.log(myFunction());

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


