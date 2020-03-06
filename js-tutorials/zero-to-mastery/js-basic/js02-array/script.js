// Exercise#1
let array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
let b = array.shift(); // ["Apple", "Oranges", "Blueberries"]
console.log(b); // "Banana"

// 2. Sort the array in order.
array.sort(); // array = ["Apples", "Blueberries", "Oranges"]

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi"); // ["Apples", "Blueberries", "Oranges", "Kiwi"]

// 4. Remove "Apples" from the array.
let ap = array.splice(0, 1); // ["Blueberries", "Oranges", "Kiwi"]
console.log(ap); // ["Apples"]

// 5. Sort the array in reverse order.
array.reverse(); //["Kiwi", "Oranges", "Blueberries"]

// Exercise#2: TO get the "Oranges" string
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
var oranges = array2[1][1][0];
console.log(oranges);

// Exercise#3
var pens;
pens = ["red", "blue", "green", "orange"];
console.log("Pen: ", pens);

console.log("\nreverse");
console.log("   Reverse: ", pens.reverse());

console.log("\nreturn the 1st item of the array");
console.log("   pens.shift()", pens.shift());
console.log("   Pen: ", pens);

console.log("\nAdd comma-separated list of values to the front of the array:");
console.log(
  '   pens.unshift("purple", "yellow")',
  pens.unshift("purple", "yellow")
); // return the 1st item of the array
console.log("   Pen: ", pens);

console.log("\nRemove the last value of the array:");
console.log("   pens.pop()", pens.pop());
console.log("   Pen: ", pens);

console.log("\nAdd comma-separated list of values to the end of the array:");
console.log("   pens.push()", pens.push("pink", "black"));
console.log("   Pen: ", pens);

console.log(
  "\npens.pslice(pos, n) - Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):"
);
console.log("   pens.splice(1,2)", pens.splice(1, 2));
console.log("   Pen: ", pens);

console.log(
  "\npens.slice() - Create a copy of an array. Typically assigned to a new variable:"
);
var newPens = pens.slice();
console.log("   newPens: ", newPens);
console.log("   Pen: ", pens);

console.log(
  "\nReturn the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):"
);
var result = pens.indexOf("blue");
console.log('   pens.indexof("blue")', pens.indexOf("blue"));
console.log("   Pen: ", pens);

console.log(
  "\nReturn the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):"
);
var str = pens.join(", ");
console.log('   pens.join(", ")', pens.join(", "));
console.log("   Pen: ", pens);
