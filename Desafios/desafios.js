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

//     console.log(b.split(a));

//   return b.split(a).length-1;
// }

// console.log(
//   myFunction("m", "how many times does the character occur in this sentence?")
// );
// console.log(
//   myFunction("h", "how many times does the character occur in this sentence?")
// );
// console.log(
//   myFunction("?", "how many times does the character occur in this sentence?")
// );
// console.log(
//   myFunction("z", "how many times does the character occur in this sentence?")
// );

//! Write a function that takes an object (a) as argument. Return the sum of all object values

// function myFunction(a) {
//   const arr = Object.values(a);
//   console.log(arr);
//   return Object.values(a).reduce((sum, cur) => sum + cur, 0);
// }
// console.log(myFunction({ a: 1, b: 2, c: 3 }));
// console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }));
// console.log(myFunction({ w: 15, x: 22, y: 13 }));

//! Write a function that takes two sets (a and b) as arguments. Get the intersection of the sets

// function myFunction(a, b) {

//   let _intersection = new Set();
//   for (let elem of b) {
//     if (a.has(elem)) {
//       _intersection.add(elem);
//     }
//   }
//   return _intersection;
// }

// console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6])));
// console.log(myFunction(new Set("12345"), new Set([..."45678"])));
// console.log(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4])));

//! Write a function that takes two sets (a and b) as arguments. Return the symmetric difference of the sets.

// function myFunction(setA, setB) {
//   let _difference = new Set(setA);
//   for (let elem of setB) {
//     if (_difference.has(elem)) {
//       _difference.delete(elem);
//     } else {
//       _difference.add(elem);
//     }
//   }
//   return _difference;
// }

// console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6])));
// console.log(myFunction(new Set("12345"), new Set([..."45678"])));
// console.log(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4])));

//! Write a function that takes an array of strings as argument. Return the longest string

// function myFunction(arr) {
//   let myStr = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > myStr.length) {
//       myStr = arr[i];
//     }
//   }
//   return myStr;
// }

// console.log(myFunction(["help", "me", "testing"]));
// console.log(myFunction(["I", "need", "candy"]));
// console.log(myFunction(["betters", "life", "dont", "ornitorrinco"]));

//! Write a function that takes an array of numbers as argument. It should return the average of the numbers

// function myFunction(arr) {
//   const mySize = arr.length;

//   return arr.reduce((sum, cur) => sum + cur, 0) / mySize;
// }

// console.log(myFunction([10, 100, 40]));
// console.log(myFunction([10, 100, 1000]));
// console.log(myFunction([-50, 0, 50, 200]));
// console.log(myFunction([10.2, 155, 40.8]));

//! Write a function that takes a number (a) as argument. Round a to the 2nd digit after the comma. Return the rounded number

// function myFunction(a) {
//   const decimal = a.toFixed(2);

//   return parseFloat(decimal);
// }

// console.log(myFunction(2.12397));
// console.log(myFunction(3.136));
// console.log(myFunction(1.12397));
// console.log(myFunction(26.1379));

//! Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays

// function myFunction(...arrays) {
//   return arrays.flat();
// }

// console.log(myFunction([1, 2, 3], [4, 5, 6]));
// console.log(myFunction(["a", "b", "c"], [4, 5, 6]));
// console.log(myFunction([true, true], [1, 2], ["a", "b"]));

//! Write a function that takes an array as argument. It should return true if all elements in the array are equal
//! It should return false otherwise

// function myFunction(arr) {
//   const result = arr.every((element) => {
//     return arr[0] === element;
//   });

//   return result;
// }

// console.log(myFunction([true, true, true, true]));
// console.log(myFunction(["test", "test", "test"]));
// console.log(myFunction([1, 1, 1, 2]));
// console.log(myFunction(["10", 10, 10, 10]));

// function myFunction2(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[0]) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(myFunction2([true, true, true, true]));
// console.log(myFunction2(["test", "test", "test"]));
// console.log(myFunction2([1, 1, 1, 2]));
// console.log(myFunction2(["10", 10, 10, 10]));

//! Write a function that takes a number (a) as argument.  If a is a whole number (has no decimal place), return true. Otherwise, return false.

// function myFunction(a) {

// return a % 1 === 0;

//   return Number.isInteger(a); // outra forma
// }

// console.log(myFunction(4));
// console.log(myFunction(1.123));
// console.log(myFunction(1048));
// console.log(myFunction(10.48));

//! Write a function that takes an array of objects and a string as arguments. Add a property with key 'continent' and value equal to the string to each of the objects. Return the new array of objects

// function myFunction(arr, str) {
//   const myArray = arr.map((element) => ({
//     ...element,
//     continent: str,
//   }));

//   return myArray;
// }

// console.log(
//   myFunction(
//     [
//       { city: "Tokyo", country: "Japan" },
//       { city: "Bangkok", country: "Thailand" },
//     ],
//     "Asia"
//   )
// );
// console.log(
//   myFunction(
//     [
//       { city: "Stockholm", country: "Sweden" },
//       { city: "Paris", country: "France" },
//     ],
//     "Europe"
//   )
// );

//! Write a function that takes an array (a) and a number (b) as arguments. Sum up all array elements with a value greater than b. Return the sum

// function myFunction(a, b) {
//   let sum = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b) {
//       sum = sum + a[i];
//     }
//   }

//   return sum;
// }

// console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(myFunction([-10, -11, -3, 1, -4], -3));
// console.log(myFunction([78, 99, 100, 101, 401], 99));

//! Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array.

// function myFunction(a, b) {
//   const conc = a.concat(b).sort(function (x, y) {
//     return x - y;
//   });
//   const mySet = new Set(conc);

//   return [...mySet];
// }

// console.log(myFunction([1, 2, 3], [3, 4, 5]));
// console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

//! Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set.

function myFunction(set, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      continue;
    } else {
      set.add(arr[i]);
    }
  }

  return set;
}

console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6]));
console.log(myFunction(new Set("12345"), [..."6789"]));
console.log(myFunction(new Set([1, 2, 3]), [2, 3]));
