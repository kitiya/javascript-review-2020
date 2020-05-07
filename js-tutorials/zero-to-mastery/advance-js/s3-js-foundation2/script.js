// this keyword 2 ===============================

// const character = {
//   name: "Simon",
//   getCharacter() {
//     return this.name;
//   }
// };
// const giveMeTheCharacterNOW = character.getCharacter.bind(character);

// console.log("?", giveMeTheCharacterNOW());

// IIFE ===============================

// (function() {
//   var x = 'IIFE Example';
//   console.log('IIFE');
//   console.log(x);
// })();
//  console.log(x);

// ====================================

/*
'use strict';
function weird() {
  // leakage of global variables
  height=50;
  return height;
}

// console.log(height); // ReferenceError
console.log(weird());
console.log(height); // 50
*/

// ====================================
// const x = 'x'

// function a() {
//   const x="xx"

//   console.log(x);
//   return b();

//   function b() {
//     console.log(x);

//     return c();

//     function c() {
//      console.log(x);
//     }
//   }
// }

// a();

// ====================================

/*
const x = 'x'
function a() {
  const x="xx"
  console.log(x);
  return b();
}


function b() {
  console.log(x);
  
  return c();
}

function c() {
  console.log(x);
}


a();
*/

// ====================================
// console.log(a);

// sing1();
// var a = 'a';

// // function declaration
// function sing() {
//   console.log("la..la..la..");
// }

// // function expression
// var sing1 = function() {
//   console.log("la..");
// }

// // function expression
// const sing2 = () => {
//   console.log("la..");
// }

/*
console.log((one))
var one = 1;
var one = 2;
*/

/*
a();

function a() {
  console.log('hi');
}

function a() {
  console.log('bye');
}
*/
