//What does the following code log to the console, and why?
/* 
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
*/

//my attempt 
/*
it will log product 113, product not found!. the reason is
because of the absense of the break keyword, execution will
fall through till it reaches the default condition
*/

//book solution
/*
Since the case clauses of the switch statement lack break 
statements, control falls through from the matching case '113' 
clause and executes the code in the case '142' and default 
clauses as well. JavaScript doesn't care that the criteria for 
extra case clauses don't match our serial value. This 
fall-through behavior is often undesirable. To avoid it, you 
must add break statements to each case clause:

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
      break;
    case '113':
      console.log('Product2');
      break;
    case '142':
      console.log('Product3');
      break;
    default:
      console.log('Product not found!');
  }
}
*/
/*
note: i didn't know that JavaScript doesn't care that the 
criteria for extra case clauses don't match our serial value.
*/

