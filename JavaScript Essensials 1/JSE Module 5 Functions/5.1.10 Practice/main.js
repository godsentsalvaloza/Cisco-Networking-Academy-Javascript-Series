// Exercise 1: Arrays in JavaScript have a sort method available which, as you might guess, allows you to sort its elements. This method takes as an argument a function that will compare two elements of the array. The function should return zero if we consider the arguments to be the same, a value less than zero if we consider the first one to be smaller than the second, and a value larger than zero otherwise.

// Task 1A. Try to modify the above piece of code to make it as short as possible. Suggestions:

//     use an anonymous function;
//     use an arrow function;
//     consider skipping the if statement.

// let numbers = [50, 10, 40, 30, 20];

// let sorted = numbers.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

// console.log(sorted); // [10, 20, 30, 40, 50]

// Task 1B. Then modify the function so that the elements are sorted in descending order, not in ascending order as in the example.

// let numbers = [50, 10, 40, 30, 20];

// let sorted = numbers.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));

// console.log(sorted); // [10, 20, 30, 40, 50]

// Exercise 2: Write three functions with the names add, sub, and mult, which will take two numerical arguments. The functions are to check if the given arguments are integers (use Number.isInteger). If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively. The functions are to be declared using a function statement.

// function add(a, b) {
//   if (!Number.isInteger(a) || !Number.isInteger(b)) {
//     return NaN;
//   } else {
//     return a + b;
//   }
// }
// function mult(a, b) {
//   if (!Number.isInteger(a) || !Number.isInteger(b)) {
//     return NaN;
//   } else {
//     return a * b;
//   }
// }
// function sub(a, b) {
//   if (!Number.isInteger(a) || !Number.isInteger(b)) {
//     return NaN;
//   } else {
//     return a - b;
//   }
// }
// console.log(add(12, 10)); // -> 22
// console.log(mult(12, 10.1)); // -> NaN

// Exercise 3: Rewrite the functions from the previous task using an arrow function expression, trying to write them in the shortest possible form.

// let add = (a, b) =>
//   !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;

// let sub = (a, b) =>
//   !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;

// let mult = (a, b) =>
//   !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

// console.log(add(12, 10)); // -> 22
// console.log(mult(12, 10.1)); // -> NaN

// Exercise 4: Write an action function that will take the callback function as its first argument and the other two arguments as numbers. As a callback function, you will be able to pass one of the three functions from the previous task. The action function will call the callback function passed to it and will return the obtained result. The callback function will accept the second and third arguments from the action call.

// let add = (a, b) =>
//   !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;

// let sub = (a, b) =>
//   !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;

// let mult = (a, b) =>
//   !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

// let action = (callback, a, b) => callback(a, b);

// console.log(action(add, 12, 10)); // -> 22
// console.log(action(sub, 12, 10)); // -> 2
// console.log(action(mult, 10, 10.1)); // -> NaN

// Exercise 5: Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.

// let counter = 1;
// let interval = setInterval(function () {
//   console.log(counter++);
// }, 2000);

// let stopper = setTimeout(function () {
//   clearInterval(interval);
// }, 22000);

// Exercise 6: Write a function that will calculate the n-th element of the Fibonacci sequence. This sequence is defined by a formula:

// So each element of the sequence (except the first two) is the sum of the previous two. For example: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 and F6 = F5 + F4 = 8. The function should use recursion. In the definition, use a function expression (store an anonymous function in a variable).

// let fibbRec = function (n) {
//   let retVal = 0;
//   if (n != 0) {
//     if (n === 1) {
//       retVal = 1;
//     } else {
//       retVal = fibbRec(n - 1) + fibbRec(n - 2);
//     }
//   }
//   return retVal;
// };

// console.log(fibbRec(4));

// Exercise 7: Rewrite the function from Task 6 using an arrow function expression, but try to shorten its code as much as possible (use conditional operators, and try not to use additional variables other than the parameter n).

// let fibbRec = (n) =>
//   n != 0
//     ? n === 1
//       ? (retVal = 1)
//       : (retVal = fibbRec(n - 1) + fibbRec(n - 2))
//     : 0;

// console.log(fibbRec(4));

// // Exercise 8: Write an iterative version of the function from Exercise 5 (use the for loop). Declare the function using a function statement.

function fibbIter(n) {
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a;
    a = b;
    b += c;
  }
  return b;
}
console.log(fibbIter(4));
