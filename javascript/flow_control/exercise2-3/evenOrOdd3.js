/*
Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return
*/

function evenOrOdd(int) {
  if (!(Number.isInteger(int))) {
    console.log('This is not an integer!')
    return;
  }
  switch (int) {
  case int % 2 === 0:
  console.log('even');
  break;
  default:
  console.log('odd');
  break;
  };
}
evenOrOdd(4.8)