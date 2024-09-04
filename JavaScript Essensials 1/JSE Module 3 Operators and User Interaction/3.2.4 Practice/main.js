// Exercise: Using everything you’ve learned up until this point, write a script that asks a user about the width, height, and length of a box, then calculate and return to the user the volume of this box.

// As an example, a box with width = 20, height = 10, and length = 50 will have a volume of 10000 (omitting units, as they are not relevant in this scenario). For now, assume that the values provided by the user are valid numbers, but if you have any ideas on how, you can try to make this script in such a way that it will be resistant to invalid values.

let length = prompt("Enter Length: ", 0);
let width = prompt("Enter width: ", 0);
let height = prompt("Enter height: ", 0);

let result =
  length || width || height !== NaN
    ? `The area is ${length * width * height}`
    : "Invalid output, try again later";

document.write(result);
