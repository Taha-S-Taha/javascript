/*
Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
*/

function evenOrOdd(int) {
  switch (int) {
  case int % 2 === 0:
  console.log('even');
  break;
  default:
  console.log('odd');
  break;
  };
}
evenOrOdd(-33)