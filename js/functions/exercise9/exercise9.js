/*
Identify all of the variables named on each line of the 
following code. You may assume that question is the name of 
a built-in function in JavaScript (it is not, so this code 
won't work as written).

function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt)); xxx1
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`); xxx2
*/

//my attempt 
/*
line 7: multiply, left, right
line 8: product, left, right
line 9: product
line 10: none
line 11: none
line 12: getNumber, prompt 
line 13: prompt xxx1
line 14: none
line 15: none
line 16: left, getNumber
line 17: right, getNumber
line 18: left, right, left, right, multiply xxx2
*/

//book solution
/*
ine 1: multiply, left, right: The function name and the 
parameter names are all variable names.
Line 2: product, left, right
Line 3: product
Line 6: getNumber, prompt
Line 7: parseFloat, question, prompt. This one is a little 
tricky. parseFloat is an actual built-in function in 
JavaScript; we are pretending that question also is a 
built-in function. As such, we know that both parseFloat and 
question are variable names. xxx1
Line 10: left, getNumber
Line 11: right, getNumber
Line 12: console, left, right, multiply: console.log is a 
little tricky here. console is the variable name for the 
built-in Console object. In contrast, console.log is the name 
of a method in that object. As such, log is a property name, 
not a variable name. xxx2
*/