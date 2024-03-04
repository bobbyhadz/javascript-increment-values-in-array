// EXAMPLE 1 - Increment the Values in an Array in JavaScript

const arr = [1, 2, 3];

const newArr = arr.map(num => num + 1);
console.log(newArr); // 👉️ [2, 3, 4]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Creating an incrementing array in JavaScript

// const arr1 = Array.from(Array(5), (_, index) => index);
// console.log(arr1); // 👉️ [ 0, 1, 2, 3, 4 ]

// const arr2 = Array.from(Array(5), (_, index) => index + 1);
// console.log(arr2); // 👉️ [ 1, 2, 3, 4, 5 ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Increment specific values in an array in JavaScript

// const arr = [1, 2, 3];

// arr[0] += 1;
// console.log(arr[0]); // 👉️ 2

// arr[0] = arr[0] + 1;
// console.log(arr[0]); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 4 - Increment the values in an array using `forEach()`

// const arr = [1, 2, 3];

// arr.forEach((num, index) => {
//   arr[index] = num + 1;
// });

// console.log(arr); // 👉️ [2, 3, 4]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Increment the values in an array using a `for` loop

// const arr = [1, 2, 3];

// for (let index = 0; index < arr.length; index++) {
//   arr[index] = arr[index] + 1;
// }

// console.log(arr); // 👉️ [ 2, 3, 4 ]
