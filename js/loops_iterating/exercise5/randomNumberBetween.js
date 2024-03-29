/*
The following code uses a randomNumberBetween function to 
generate a number between its first and second arguments. 
It uses a while loop to try to generate a number greater 
than 2. Refactor the code so that you don't need to call 
randomNumberBetween from two different locations, 
lines 15 and 19. Do not change the arguments you pass to 
randomNumberBetween.

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// my attempt: none!!

// book solution
/*
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater 2');

The ideal use case for do...while occurs when you need to 
execute some code at least once like we do here.
*/

/*
note: review book solution thoroughly
