"use strict";

/*
 * Ref: https://javascript.info/closure
 */

// === 2020 Tasks ===//

/*
 * --- Sum with closures ---
 * https://javascript.info/closure#sum-with-closures
 * Write function sum that works like this: sum(a)(b) = a+b.
 * Yes, exactly this way, using double parentheses (not a mistype).

 * For instance:
 * sum(1)(2) = 3
 * sum(5)(-1) = 4
 */
function sum(a) {
  return function(b) {
    return a + b;
  };
}
// ======================================================== //
/* 
 * --- Filter through function --- 
 * https://javascript.info/closure#filter-through-function
 * 
 * We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

 * Make a set of “ready to use” filters:
 *    inBetween(a, b) – between a and b or equal to them (inclusively).
 *    inArray([...]) – in the given array.
 * 
 * The usage must be like this:
 *    arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
 *    arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
 * 
 * For instance:
 *    let arr = [1, 2, 3, 4, 5, 6, 7];
 *    alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
 *    alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
 * 
 */
function inBetween(lower, upper) {
  return function(value) {
    return lower <= value && value <= upper;
  };
}

let arr = [1, 2, 3, 4, 5, 6];
let ib = arr.filter(inBetween(2, 5));
console.log(ib);

// === 2017 Tasks === //

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

// ======================================================== //

/*
 * 4. Filter through function: arr.filter(inBetween(3, 6))
 */

function inBetween(lower, upper) {
  return function(value) {
    return lower < value && value < upper;
  };
}

function inArray(arr) {
  return function(value) {
    return arr.includes(value);
  };
}

// ======================================================== //

/*
 * 5. Sort by field
 */
function byField(field) {
  return function(item1, item2) {
    return item1[field] > item2[field] ? 1 : -1;
  };
}

function byFieldSolution(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
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

users5a.sort(byField("name"));
// console.log(users5a);    // Ann, John, Pete

// -- sort by age --- //
let users5b = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
users5b.sort(byField("age"));
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

    let shooter = function() {
      // shooter function
      console.log(j); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

// // Test
// let army = makeArmy();
//
// for (let counter = 0; counter < 10; counter++) {
//   army[counter]();
// }
//
// army[0](); // the shooter number 0 shows 10
// army[5](); // and number 5 also outputs 10...
// // ... all shooters show 10 instead of their 0, 1, 2, 3...

// -------------------------------------------------------- //
function makeArmy_solution() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function() {
      // shooter function
      console.log(i); // should show its number
    };
    shooters.push(shooter);
  }

  return shooters;
}

// let army6a = makeArmy_solution();

// army6a[0](); // 0
// army6a[5](); // 5
