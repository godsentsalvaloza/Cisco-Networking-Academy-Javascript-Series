// Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.

"use strict";

let b1 = true;
let b2 = Boolean(true);

let n1 = 10;
let n2 = Number(10);

let s1 = "Hello";
let s2 = String("Hello");

let i1 = 333n;
let i2 = BigInt(333n);

let u1 = undefined;

// Question 2: Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].

console.log(`form: ${b1} [${typeof b1}]`);
console.log(`form: ${n1} [${typeof n1}]`);
console.log(`form: ${s1} [${typeof s1}]`);
console.log(`form: ${i1} [${typeof i1}]`);
console.log(`form: ${u1} [${typeof u1}]`);

// Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?

let result = Boolean(BigInt(Number(String("2024"))));
console.log(`form: ${result} [${typeof result}]`);

// Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.
let boolTest = true + true;
let stringTest = "Hello" + "There";
let numberTest = 10 + 10;
let bigIntTest = 120n + 10n;
let undefinedTest = undefined + undefined;

console.log(`form: ${boolTest} [${typeof boolTest}]`);
console.log(`form: ${stringTest} [${typeof stringTest}]`);
console.log(`form: ${numberTest} [${typeof numberTest}]`);
console.log(`form: ${bigIntTest} [${typeof bigIntTest}]`);
console.log(`form: ${undefinedTest} [${typeof undefinedTest}]`);

// Question 5: Try adding two values of different types and check the results.
boolTest = true + 10;
stringTest = "Hello" + false + 10;
numberTest = 10 + "Hello" + true;
bigIntTest = 120n;
undefinedTest = "Hello" + undefined;

console.log(`form: ${boolTest} [${typeof boolTest}]`);
console.log(`form: ${stringTest} [${typeof stringTest}]`);
console.log(`form: ${numberTest} [${typeof numberTest}]`);
console.log(`form: ${bigIntTest} [${typeof bigIntTest}]`);
console.log(`form: ${undefinedTest} [${typeof undefinedTest}]`);

// Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).

const str1 = 42 + (2 - "1");
// const str1 = 42 + + "1";
console.log(str1);
