'use strict';

/*
* Ref: https://javascript.info/function-object#tasks
*/

// ======================================================== //
//
// makeCounter.set = (num) => {
//   counter = num;
//   return counter;
// };


/*
* 6.1 Set and decrease for counter
*
* Modify the code of makeCounter() so that the counter can also decrease and set the number:
*  => counter() should return the next number (as before).
*  => counter.set(value) should set the count to value.
*  => counter.decrease(value) should decrease the count by 1.
*/
function makeCounter(){
  counter.count = 0;

  function counter(value) {
    counter.count = (!value) ? ++counter.count : counter.count + value;
    return counter.count;
  }

  counter.set = function(value) {
    counter.count = value;
    return counter.count;
  }

  counter.decrease = function(value) {
    counter.count = (!value) ? --counter.count : counter.count - value;
    return counter.count;
  }

  return counter;
}

// Test
// let ct = makeCounter();
//
// console.log(ct);
//
// console.log(ct()); // 0
// console.log(ct()); // 1
// console.log(ct()); // 2
//
// console.log(ct.set(11)); // 11
// console.log(ct.set(5)); // 5
//
// console.log(ct.decrease(2)); // 3
// console.log(ct.decrease()); // 2

// ======================================================== //

/*
* Sum with an arbitrary amount of brackets
*
* Write function sum that would work like this:
*  => sum(1)(2) == 3; // 1 + 2
*  => sum(1)(2)(3) == 6; // 1 + 2 + 3
*  => sum(5)(-1)(2) == 6
*  => sum(6)(-1)(-2)(-3) == 0
*  => sum(0)(1)(2)(3)(4)(5) == 15
*/
// from the js03 - closure
function basicSum(val1) {
  return (val2) => {
    return val1 + val2;
  }
}

// console.log(basicSum(1)(2));

// -------------------------------------------------------- //
// copied from the solution below
function sumN(val1) {
  let sum = val1;

  function innerSum(val2) {
      sum += val2;
    return innerSum;
  }

  innerSum.toString = function() {
    return sum;
  };

  return innerSum;
}

// console.log( '\n' );
// console.log( sumN(1)(2)(3) );
// console.log( sumN(0)(1)(2)(3)(4)(5) );

// -------------------------------------------------------- //
// Solution
function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

// console.log('\n');
// console.log( sum(1)(2) ); // 3
// console.log( sum(5)(-1)(2) ); // 6
// console.log( sum(6)(-1)(-2)(-3) ); // 0
// console.log( sum(0)(1)(2)(3)(4)(5) ); // 15
