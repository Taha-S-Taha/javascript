/*
Write a function that takes a string as an argument and returns 
an all-caps version of the string when the string is longer 
than 10 characters. Otherwise, it should return the original 
string. Example: change 'hello world' to 'HELLO WORLD', but 
don't change 'goodbye'.
*/

//my attempt
/*
function toCaps(string) {
	if (string.length >= 10) {
		console.log(string.toUpperCase())
	} else {
		console.log(string)
	}
}

toCaps('aaaaaaaaaa')
*/

//book solution
/*
function capsLong(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capsLong("Sue Smith"));     // => Sue Smith
console.log(capsLong("Sue Robertson")); // => SUE ROBERTSON
console.log(capsLong("Joe Thomas"));    // => Joe Thomas
console.log(capsLong("Joe Stevens"));   // => JOE STEVENS

d
//another book solution
/*
function capsLong(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

console.log(capsLong("Sue Smith"));     // => Sue Smith
console.log(capsLong("Sue Robertson")); // => SUE ROBERTSON
console.log(capsLong("Joe Thomas"));    // => Joe Thomas
console.log(capsLong("Joe Stevens"));   // => JOE STEVENS
*/

/*
note: i didn't pay attn to them asking that it should 
strictly longer than 10 as opposed to >= 10 which i put in my
answer. i also confused the question asking to return the 
string with logging it to console, which i did. (should pay
attention to detail in questions, words like "return", "log",
"greater than", "greater than or equal"...etc). Also, good to 
keep the console.log for calling the function out of the function
in this case which keeps the function generic. 
*/