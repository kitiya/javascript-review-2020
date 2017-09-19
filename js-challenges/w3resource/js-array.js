/*
 * Ref: https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
 */

 // ======================================================== //

/*
 * 1. To check whether an `input` is an array or not.
 */
 function isArray(input) {
    return Array.isArray(input);
}

// console.log("abc: " + isArray('abc'));
// console.log("123: " + isArray(123));
// console.log("['red', 'green']: " + isArray(['red', 'green']));
// console.log("{id: 1, name: 'Paul'}: " + isArray({id: 1, name: 'Paul'}));

// -------------------------------------------------------- //

// solution from w3resource
let is_array = function(input) {
    return (toString.call(input) === "[object Array]");
}

// console.log('\n');
// console.log(`abc: ${is_array('abc')}`);
// console.log(`123: ${is_array(123)}`);
// console.log(`['red', 'green']: ${is_array(['red', 'green'])}`);
// console.log(`{id: 1, name: 'Paul'}: ${is_array({id: 1, name: 'Paul'})}`);


// ======================================================== //

/*
 * 2. To clone an array. 
 */
 function cloneArray(arr) {
    return arr.slice(0);
}

// // test with "clone" array
// let arr2A = [1, 2, 3, 4, 5];
// let arr2B = cloneArray(arr2A);

// console.log(`arr2A - Before: ${arr2A}`);
// console.log(`arr2B - Before: ${arr2B}`);

// arr2B.push(6);

// // with clone, arr2A doesn't changed when Arr2B changed
// console.log(`arr2A - After: ${arr2A}`); 
// console.log(`arr2B - After: ${arr2B}`);

// console.log();

// // test with "copy" array
// let arr2C = arr2A;
// arr2C.push(7);

// // arr2A changed when arr2C changed
// // because it points to the same reference as arr2C
// console.log(`arr2A - After: ${arr2A}`); 
// console.log(`arr2C - After: ${arr2C}`);

// ======================================================== //

/*
 * 3. To get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array. 
 */
 function firstNthElement(arr, n) {
    // !!! check if an array is empty !!! //
    if (arr.length === 0) return []; 

    // !!! check if a optional parameter is 'undefined' !!! //
    if (typeof n === 'undefined') return arr[0]; 

    return arr.slice(0, n);
}

// console.log(firstNthElement([7, 9, 0, -2])); // 7
// console.log(firstNthElement([], 3)); // []
// console.log(firstNthElement([7, 9, 0, -2], 3)); // [7, 9, 0]
// console.log(firstNthElement([7, 9, 0, -2], 6)); // [7, 9, 0, -2]
// console.log(firstNthElement([7, 9, 0, -2], -3)); // []

// ======================================================== //

/*
 * 4. To get the last element of an array. 
 * Passing a parameter 'n' will return the last 'n' elements of the array.
 */

 function lastNthElement(arr, n) {
    let len = arr.length;

    // !!! check if an array is empty !!! //
    if (len === 0) return []; 

    // !!! check if a optional parameter is 'undefined' !!! //
    if (typeof n === 'undefined') return arr[len - 1]; 

    let begin = (len > n) ? len - n : 0;
    return arr.slice(begin, );
}

// console.log(lastNthElement([7, 9, 0, -2])); // -2
// console.log(lastNthElement([7, 9, 0, -2], 3)); // [9, 0, -2]
// console.log(lastNthElement([7, 9, 0, -2], 6)); // [7, 9, 0, -2]

// ======================================================== //

/*
 * 5. To join all elements of the following array into a string.
 */
 function joinArray(arr, symbol) {
    return arr.join(symbol);
}

let arr5 = ["Red", "Green", "White", "Black"];

// console.log(joinArray(arr5)); // Red,Green,White,Black
// console.log(joinArray(arr5, "/")); // Red/Green/White/Black
// console.log(joinArray(arr5, "+")); // Red+Green+White+Black

// ======================================================== //

/*
 * 6. To accept a number as input and insert dashes (-) between each two even numbers. 
 *
 * For example 
 *   - if you accept 025468 the output should be 0-2-54-6-8.
 *   - if you accept 025469 the output should be 0-2-54-69.
 */
 // TODO
 function insertDashes(numStr) {

 }

 // console.log(insertDashes('025468')); // 0-2-54-6-8


 // solution: i this this is incorrect. It should return 0-2-54-6-8
 function insertDashes_solution(numStr) {
    let index = numStr.length - 1;

    let result = [];

    // iterate from right to left
    while(index >= 0) {

        if ((numStr[index - 1] % 2 === 0) && (numStr[index] % 2  === 0)) {
            result.unshift('-', numStr[index]);
        } else {
            result.unshift(numStr[index])
        }

        index--;
    }
    return result.join('');
}

// console.log(insertDashes_solution('025468')); // 0-254-6-8


// ======================================================== //
/*
 * 7. To sort the items of an array.
 */
 // TODO
 function sortArray(arr) {
    return arr.sort();
}

console.log(sortArray([3, 8, 7, 6, 5, -4, 3, 2, 1 ])); // [-4, 1, 2, 3, 3, 5, 6, 7, 8]

// ======================================================== //

/*
 * 8. To find the most frequent item of an array.
 *
 * Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 * Sample Output : a ( 5 times ) 
 */
function findMostFrequent(arr) {


}


// ======================================================== //

/*
 *
 */

// ======================================================== //

/*
 *
 */

// ======================================================== //

/*
 *
 */

// ======================================================== //