// Exercise 1: Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc.

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// Exercise 2: Modify the previous program so that it asks the user for the first and last number it uses instead of 100 and 0 (hint: use the prompt dialog).

// Check if the entered values are correct (that the initial value is greater than the final value).

// let firstValue = Number(prompt("Enter the first value:", 100));
// let secondValue = Number(prompt("Enter the second value: ", 0));

// if (
//   !Number.isNaN(firstValue) &&
//   !Number.isNaN(secondValue) &&
//   firstValue > secondValue
// ) {
//   for (firstValue; firstValue >= secondValue; firstValue -= 10) {
//     console.log(firstValue);
//   }
// } else {
//   console.log("Error: invalid input");
// }

// Exercise 3: There are ten different numbers in the following numbers array:

// Write a program that first writes out all these numbers on the console, then only those that are even (hint: the remainder of dividing an even number by 2 is equal to 0), then only those that are larger than 10 and at the same time smaller than 60.

// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// console.log("All numbers");
// for (let number of numbers) {
//   console.log(number);
// }

// console.log("Numbers that are divisible by two");
// for (let number of numbers) {
//   if (number % 2 === 0) {
//     console.log(number);
//   } else {
//     continue;
//   }
// }

// console.log("Numbers that are larger than 10 and smaller than 60");
// for (let number of numbers) {
//   if (number > 10 && number < 60) {
//     console.log(number);
//   } else {
//     continue;
//   }
// }

// console.log(
//   "Numbers that are larger than 10, smaller than 60, and divisibe by 2"
// );
// for (let number of numbers) {
//   if (number > 10 && number < 60 && number % 2 === 0) {
//     console.log(number);
//   } else {
//     continue;
//   }
// }

// Exercise 4: Write a program using a loop that will ask the user for the name of the movie (first prompt) and its rating from www.imdb.com (second prompt). The program will allow you to enter as many movies as you want into the movies array. Each element of the array will be an object, consisting of two fields: title and imdb. The input is completed if the user presses Cancel in the prompt dialog. Then the program should first print out to the console all movies that have a rating of less than 7, then those whose rating is greater than or equal to 7

// let movie = [];

// let isEnter;

// do {
//   let movieName = prompt("Enter movie name: ");
//   let imdb = Number(prompt("Enter imdb rating (1-10): "));

//   if (movieName != "" && !Number.isNaN(imdb) && imdb <= 10 && imdb > 0) {
//     movie.push({
//       movie: movieName,
//       imdb: imdb,
//     });
//     isEnter = confirm("Do you want to enter another entry?");
//   } else {
//     alert("Error: Invalid input");
//   }
// } while (isEnter);

// console.log("Entries that has review less than 7");
// for (const element of movie) {
//   if (element.imdb < 7) {
//     console.log(`${element.movie} (${element.imdb})`);
//   }
// }

// console.log("Entries that has review more than 7");
// for (const element of movie) {
//   if (element.imdb >= 7) {
//     console.log(`${element.movie} (${element.imdb})`);
//   }
// }

// Exercise 5: The contents of the object describing the position of the vessel named "Mareno" are written on the console:

// let vessel = {
//   LATITUDE: 40.07288,
//   LONGITUDE: 154.48535,
//   COURSE: 285.6,
//   IMO: 9175717,
//   NAME: "MARENO",
// };

// for (let key in vessel) {
//   console.log(`${key} -> ${vessel[key]}`);
// }

// Exercise 6: Modify the calculator program that you made in Module 4 Section 2 in such a way that it will work in the loop until the user inputs Q in any of the prompt boxes.
let isEnter = true;
let result;
do {
  // Getting user input
  let firstNumber = Number(prompt("Enter first number: ", 0));
  let operator = prompt(
    'Enter Operator: (+) (-) (*) (/) (press "q" to quit',
    "+"
  );
  let secondNumber = Number(prompt("Enter second number: ", 0));

  // Calculate

  if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      case "q":
      case "Q":
        isEnter = false;
        result = "Terminating Program";
        break;
      default:
        result = "Error: unknown operand";
    }
  } else {
    result = "Error: at least one of the entered values is not a number";
  }
  alert(result);
} while (isEnter);
