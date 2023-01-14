/*
Using the code from Exercise 9, are the left and right 
variables on lines 1 and 2 the same as the left and right 
variables on lines 10-12? Explain your reasoning.

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

//my attempt 
/*
no they are not because left, right were declared in line 6 as 
parameters for the function multiply, therefore they are 
considered as a part of that function and within it's scope
in other words local to the multiply function and are terminated
as soon as the function finishes executing

in the case of lines 15 and 16 left, right 
were completely different variables declared OUTSIDE 
the scope of any function thus they are global and available 
throughout the program
*/

//book answer
/*
They are not the same variables.

The left and right variables declared on lines 10 and 11 
are a little tricky. First, though they have the same names 
as the parameters defined for the multiply function, they 
are not the same variables. (The function parameters shadow 
the variables on lines 10 and 11.) Furthermore, they are 
global variables even though they are only accessible on 
line 12 (technically, left is also accessible on line 11 but 
is not used). They are considered global because they are 
defined at the topmost level of the program.

The left and right parameters on line 1 are local variables 
since function parameters are always local to the function. 
Thus, line 2 refers to the local variables.
*/
