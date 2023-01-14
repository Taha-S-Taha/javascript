/* Refactor the code from the previous exercise to use explicit coercion, 
so it logs 15 instead. Code: console.log('5' + 10); */

let value = Number('5') + 10
console.log(value)

// question 6 below

console.log(`The value of 5 + 10 is ${value}`)

// book solution of question 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

