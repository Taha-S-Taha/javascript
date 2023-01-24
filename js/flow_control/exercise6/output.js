/*
What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
*/

//my attempt
/*
it returns 'not empty' because (arr) is not a falsy value and
should evaluate to true
*/

//book solution
/*
The output is Not Empty since, while the array is empty -- 
it has no elements and the length property is 0 -- it isn't 
falsy. Thus, JavaScript executes the first branch of the if 
statement.
*/

