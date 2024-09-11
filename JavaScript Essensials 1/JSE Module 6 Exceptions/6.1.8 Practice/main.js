// Exercise 1: Write your own div function that will take two call arguments and return the result of dividing the first argument by the second. In JavaScript, the result of dividing by zero is the value Infinity (or -Infinity, if we try to divide a negative number). Change this. If you pass 0 as the second argument, your function should throw a RangeError exception with the appropriate message. Prepare a test call of the function for both valid division and division by zero.

let div = (a, b) => {
  if (Number.isFinite(a) && Number.isFinite(b) && b != 0) {
    return a / b;
  } else {
    throw new RangeError("Can not divide by zero");
  }
};

document.write(div(10, 2));

// Write a program that, in a loop, divides the number 1000 by successive elements of the numbers array, displaying the result of each division. To divide the numbers, use the function from the previous task. Use the try...catch construction to handle an exception thrown in the case of division by zero. If such an exception is caught, the program should print an appropriate message (taken from the exception) and continue its operation (division by successive elements of the array).

let numbers = [10, 40, 0, 20, 50];

for (const element of numbers) {
  let result;
  try {
    result = div(1000, element);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
