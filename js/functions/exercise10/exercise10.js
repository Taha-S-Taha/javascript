/*
Using the code from Exercise 9, classify each variable name 
as either global or local. For our purposes here, you may 
assume that the code from Exercise 9 is the entire program.

function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
*/

// my attempt
/*
line 6: multiply is global, left and right are local
line 7: product is local
line 8: product is local
line 9: none
line 10: none
line 11: getNumber is global, prompt is local
line 12: parseFloat is global, question is global, 
prompt is local
line 13: none
line 14: none
line 15: left is global, getNumber is global
line 16: right is global, getNumber is global
line 17: console is global, left & right are global, 
multiply is global 
*/

//book answer
/*
Global Variables: multiply, getNumber, left, right, console, 
parseFloat, question.
Local Variables: left, right, product, prompt
Function names are global variables unless those functions 
are defined as an object property or nested inside another 
function. Thus, multiply, getNumber, console, parseFloat, and 
question are all global variables in this program. In addition, 
function parameters and variables declared inside a function 
are always local variables. Thus, left, right, product, and 
prompt are all local variables.
*/
