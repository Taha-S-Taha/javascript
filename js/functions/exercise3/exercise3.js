/* 
Write a program that uses a multiply function to multiply 
two numbers and returns the result. Ask the user to enter 
the two numbers, then output the numbers and result as 
a simple equation.
*/

//my attempt 
/*
function multiply(prompt) {
	let rlsync = require('readline-sync');
	let number = rlsync.question(prompt);
	return number;
}

let firstNumber = multiply('Enter the first number:\n');
let secondNumber = multiply('Enter the second number:\n');
let product = firstNumber * secondNumber
console.log(`${firstNumber} * ${secondNumber} = ${product}`);
*/

//solution from the book 
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
