/*
Without running the following code, what do you think 
it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');
*/

//my attempt 
// it will log the string "hello" and will ignore qux 

//book solution
/*
The code will print:

Hello
undefined

The qux variable inside foo gets initialized to undefined 
when we fail to provide an explicit argument in the invocation.
*/

/*
note: the word 'output' in the question includes the value
logged to console as well as the value returned (undefined
in this case). the value undefined will not be logged to
console but still part of the 'output' because it was returned
*/