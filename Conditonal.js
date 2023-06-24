
console.log(Number.MAX_VALUE + 1111)
let newMax = BigInt(Number.MAX_VALUE) + 1111n
console.log(newMax)

//
console.log('AB' + 'CD')
console.log('AB' - 'CD')
console.log(12+'34')

// any other operator outside of + will convert string to number
console.log(12-'34')
console.log(12*'34')
console.log(12/'34')

// Statements
// if ojo is a student then show him the result

// syntax of conditional statement
// if (condition) { // - condition is a boolean expression, the result of the expression is either true or false
    // code to be executed if condition is true
// }

let result = 99;
let ojoStudentId = 2023354747;
let ojoType = 'student';

if ( ojoType !== 'admin' ) {
  console.log('Your result is ' + result);
}

if ( ojoType !== 'admin'  ) { // true || true => true
  // return
} else {
  console.log('You are not allowed to see the result');
}

if ( ojoType = 'admin' ) console.log('Your result is ' + result);
else console.log('You are not allowed to see the result');

// write a code to display a 1-6 dice number
// console.log(Math.floor(Math.random() * 6) + 1)
let random = Math.ceil(Math.random() * 6) + 1;
let display = console.log;

if (random === 1) {
  display(1)
} else if (random === 2) {
  display(2)
} else if ( random === 3) {
  display(3)
} else if ( random === 4) {
  display(4)
} else if ( random === 5) {
  display(5)
} else {
  display(6)
}

// switch statement -
// syntax
switch (random) {
  case 1: {
    display(1)
    break;
  }
  case 2:
    display(2)
    break;
  case 3:
    display(3)
    break;
  case 2:
    display(2)
    break;
  case 2:
    display(2)
    break;

  default:
    display(6)
    break;
}


let age = 18;
if (age >= 18) {
  console.log('You are eligible to vote')
}

let isAdult = age >= 18 ? true : false;

if (isAdult) {
  console.log('You are eligible to vote')
} else {
  console.log('You are not eligible to vote')
}

// ternary operator
// syntax
// condition ? true : false
age >= 18 ? console.log('You are eligible to vote') : console.log('You are not eligible to vote');

random === 1 ? display(1) : random === 2 ? display(2) : random === 3 ? display(3) : random === 4 ? display(4) : random === 5 ? display(5) : display(6);


function add(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    return 'Please enter a valid number'
  }
  return a + b;
}

// LOOPS
// for loop
// for (initialization; condition; increment / decrement) {
  // code to be executed
// }
let person = { name: 'ojo', age: 99 }
// for-in loop
for (let key in person) {
  console.log(key)
  console.log(person[key])
}


// for-of loop
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let number of numbers) {
  console.log(number)
}


// while loop
// while (condition) {
  // code to be executed
// }
let i = 0;
while (i < 10) {
  console.log(i)
  console.log('repeated statement')
  i++;
}

// do while loop
do {
  console.log(i)
  console.log('repeated statement')
  i++;
  // code to be executed
} while (i < 10)
