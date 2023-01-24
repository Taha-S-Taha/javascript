/*
Write a function that logs whether a number is between 
0 and 50 (inclusive), between 51 and 100 (inclusive), 
greater than 100, or less than 0.
*/


//my attempt
/*
function numberRange(number) {
	number = Number(number)
	if (number >= 0 && number < 51) {
		console.log(`${number} is between 0 and 50`);
	} else if (number >= 51 && number < 101){
		console.log(`${number} is between 51 and 100`);
	} else if (number > 100) {
		console.log(`${number} is greater than 100`);
	} else {
		console.log(`${number} is less than 0`);
	}

}

numberRange(-255)
numberRange(3)
numberRange(66)
numberRange(135)
numberRange(0)
numberRange(50)
numberRange(100)
*/

//book solution
/*
function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}
*/

/*
note: in this case, i should have put my conditions in a
logical order to simplify the code. this means that i should
have put the condition of the number being < than 0 first
which automatically means that any number that is less than 
0 will be logged first and any other conditions will not be 
checked. this is why the book solution code looks different 
(simpler) than my code. remember, in case of a similar function
with if, else if and else statements (multiple statements)
when one condition is satisfied the function ends there and
does not execute the following statements. 
*/