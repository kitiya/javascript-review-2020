let array1 = ["a", "b", "c"];

// same as...
let array2 = {
  0: "a",
  1: "b",
  2: "c",
};

console.log(array1);
console.log(array2);

// using "Array.isArray()" to check if a variable is an array
console.log(Array.isArray(array1));
console.log(Array.isArray(array2));
