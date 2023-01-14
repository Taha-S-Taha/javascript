//Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

let number = 4936

let ones = number % 10
console.log('ones = ' + ones)

number = (number - ones) / 10

let tens = number % 10
console.log('tens = ' + tens)

number = (number - tens) / 10

let hundreds = number % 10
console.log('hundreds = ' + hundreds)

let thousands = (number - hundreds) / 10
console.log('thousands = ' + thousands)
