/*Modify the greeter.js program to ask for the user's first and 
last names separately, then greet the user with their full name.*/

let rlSync = require('readline-sync');
let namefirst = rlSync.question("What is your first name?\n");
let namelast = rlSync.question("What is your last name?\n")
console.log(`Hello ${namefirst} ${namelast}!`);

