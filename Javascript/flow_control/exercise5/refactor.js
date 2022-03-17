/* Refactor this statement to use an if statement instead.
*/

//return foo() ? 'bar' : qux();

function foo() 
if (!!foo()) === true {
  return 'bar';
} else {
  return qux();
}

console.log(foo(1))


/*
solution

if (foo()) {
  return 'bar';
} else {
  return qux();
}
*/