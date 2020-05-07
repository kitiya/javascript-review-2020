// Example 1: primitive type is passed by VALUE.
var a = 5;
var b = a;

b++;

console.log("a", a); // the value doesn't change
console.log("b", b);

// ===================================== //
// Example 2: Object passing by REFERENCE
let user1 = { name: "Ari", password: "123" };
let user2 = user1;

user2.password = "easypeasy";

console.log("user1", user1); // passed by ref, user1 is changed
console.log("user2", user2);

// ===================================== //
// Example 3: Array is an object
var c = [1, 2, 3, 4, 5];
var d = c;
d.push("789");

console.log("c", c); // passed by ref, c is modified
console.log("d", d);

// ===================================== //
// Example 4: Cloning an array
var e = [111, 222, 333];
var f = [].concat(e);
f.push("444");
console.log("e", e);
console.log("f", f);

// ===================================== //
// Example 5: Cloning an object
let obj1 = { a: "aa", b: "bb", c: "cc" };
let clone1 = Object.assign({}, obj1); // Object.assign(target, source)
let clone2 = { ...obj1 };

obj1.b = "bbbb";

console.log("obj1", obj1);
console.log("clone1", clone1); // cloned by VALUE, the cloneObj1 doesn't change.
console.log("clone2", clone2); // cloned by VALUE, the cloneObj2 doesn't change.

// ===================================== //
// Example 6: Cloning a nested object
let obj2 = { a: "aa", b: "bb", c: { deep: "try and copy me" } };
clone1 = Object.assign({}, obj2); // shallowed cloning
clone2 = { ...obj2 }; // shallowed cloning

obj2.c = "cccc";

console.log("obj2", obj2);
console.log("clone1", clone1); // cloned by VALUE, the clone1 doesn't change.
console.log("clone2", clone2); // cloned by VALUE, the clone2 doesn't change.

// ===================================== //
// Example 6: Cloning a nested object (shallow vs deep cloning)
let obj3 = { a: "aa", b: "bb", c: { deep: "try and copy me" } };
clone1 = Object.assign({}, obj3); // shallowed cloning
clone2 = { ...obj3 }; // shallowed cloning
let superClone = JSON.parse(JSON.stringify(obj3)); // DEEP CLONING

obj3.c.deep = "ha..ha..ha..";

console.log("obj3", obj3);
console.log("clone1", clone1); // GOT OVER-WRITTEN
console.log("clone2", clone2); // GOT OVER-WRITTEN
console.log("superClone", superClone); // DEEP CLONING, the value doesn't change
