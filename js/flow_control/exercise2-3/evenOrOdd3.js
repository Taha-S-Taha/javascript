/*
Let's improve our previous implementation of evenOrOdd. Add 
a validation check to ensure that the argument is an integer. 
If it isn't, the function should issue an error message and 
return.
*/

//my attempt
/*
function evenOrOdd(number) {
  if (number % 2 === 0 && number === parseInt(number)) {
    console.log('even');
  } else if (number % 2 === 0 || number !== parseInt(number)) {
    console.log("this number is not an integer");
    return;
  } else {
  	console.log("odd");

  }
}
evenOrOdd(3.2)
*/

//book solution
/*
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
*/

//note: book solution seems to be more concise 