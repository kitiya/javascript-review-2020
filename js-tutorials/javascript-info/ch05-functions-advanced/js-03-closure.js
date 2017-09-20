'use strict';

/*
 * Ref: https://javascript.info/closure
 */

 // ======================================================== //

/*
 * 1. Are counters independent?
 *
 * Here we make two counters: counter and counter2 using the same makeCounter function.
 *
 * Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?
 *
 */
 
 function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

// let counter1a = makeCounter();
// let counter1b = makeCounter();

// console.log( `counter1a: ${counter1a()}` ); // 0
// console.log( `counter1a: ${counter1a()}` ); // 1
// console.log("\n");
// console.log( `counter1b: ${counter1b()}` ); // ?
// console.log( `counter1b: ${counter1b()}` ); // ?

/*
 * The answer: 0,1.
 * 
 * Functions counter and counter2 are created by different invocations of makeCounter.
 * 
 * So they have independent outer Lexical Environments, each one has it’s own count.
 */

// ======================================================== //

/*
 * 2. Counter object
 *
 * Here a counter object is made with the help of the constructor function.
 *
 * Will it work? What will it show?
 */

 function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

let counter2 = new Counter();

// alert( counter.up() ); // ?
// alert( counter.up() ); // ?
// alert( counter.down() ); // ?

// ======================================================== //

/*
 * 3. Sum with closures
 *
 * Write function sum that works like this: sum(a)(b) = a+b.
 * Yes, exactly this way, via double brackets (not a mistype).
 * 
 * For instance:
 * sum(1)(2) = 3
 * sum(5)(-1) = 4
 */

 function sum(a) {
    return function(b) {
        return a + b;
    };
}

 // console.log(sum(1)(2)); // 3
 // console.log(sum(5)(-3)); // 2

// ======================================================== //

/*
 * 4. Filter through function
 */

 function inBetween(lower, upper) {
    return function(value) {
        return ((lower < value) && (value < upper));
    }
}

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr4.filter(inBetween(3, 6)));


function inArray(arr) {
    return function(value) {
        return arr.includes(value);
    }
}

// console.log(arr4.filter(inArray([1, 2, 5, 10])));


// ======================================================== //

/*
 * 5. Sort by field
 */
 function byField(field) {
    return function(item1, item2) {
        return (item1[field] > item2[field]) ? 1 : -1;
    }
}

function byFieldSolution(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

// Test
let users5 = [
{ name: "John", age: 20, surname: "Johnson" },
{ name: "Pete", age: 18, surname: "Peterson" },
{ name: "Ann", age: 19, surname: "Hathaway" }
];

// console.log(users5); // before sorting: John, Pete, Ann

// -- sort by name--- //
let users5a = [
{ name: "John", age: 20, surname: "Johnson" },
{ name: "Pete", age: 18, surname: "Peterson" },
{ name: "Ann", age: 19, surname: "Hathaway" }
];

users5a.sort(byField('name'));
// console.log(users5a);    // Ann, John, Pete

// -- sort by age --- //
let users5b = [
{ name: "John", age: 20, surname: "Johnson" },
{ name: "Pete", age: 18, surname: "Peterson" },
{ name: "Ann", age: 19, surname: "Hathaway" }
];
users5b.sort(byField('age'));
// console.log(users5b); // Pete, Ann, John


// ======================================================== //

/*
 * 6. Army of functions
 */
 function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;

    let shooter = function() { // shooter function
      console.log( j ); // should show its number
  };
  shooters.push(shooter);
  i++;
}

return shooters;
}

let army = makeArmy();

for (let counter = 0; counter < 10; counter++) {
    army[counter]();
}
army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...

// -------------------------------------------------------- //
function makeArmy_solution() {

  let shooters = [];

  for(let i = 0; i < 10; i++) {
    let shooter = function() { // shooter function
      alert( i ); // should show its number
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army6a = makeArmy_solution();

army6a[0](); // 0
army6a[5](); // 5