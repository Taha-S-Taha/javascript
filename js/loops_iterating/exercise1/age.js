/*
Modify the age.js program you wrote in the exercises for the 
Input/Output chapter. The updated code should use a for loop 
to display the future ages.
 

original code:

let rlSync = require('readline-sync');
let age = rlSync.question("How old are you?\n");
age = Number(age)
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`)
console.log(`In 20 years, you will be ${age + 20} years old.`)
console.log(`In 30 years, you will be ${age + 30} years old.`)
console.log(`In 40 years, you will be ${age + 40} years old.`)
*/

//my attempt

let rlSync = require('readline-sync');
let age = rlSync.question("How old are you?\n");
age = Number(age);

let futureAges = [age + 10, age + 20, age + 30, age + 40];

for (let index = 0; index < futureAges.length; index += 1) {
    let futureAge = futureAges[index];
    console.log(`In ${futureAges[index] - age} years, you will be ${futureAges[index]} years old.`);
}

//book solution

/*
let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);

for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}
*/

/*
note: 
1. i forgot to add the first line of code which tells you your current age 
(console.log(`You are ${age} years old.`);)
2. the book approach was simpler yet more versatile because it was 
unnecessary to iterate over an array. all was needed was to initialize 
a variable with the value 10 then increment by 10, so naturally 
10 + 10 = 20, then 20 + 10 = 30... etc 