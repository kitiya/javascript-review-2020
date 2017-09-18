/*
 * Ref: https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
 */

 // ======================================================== //

/*
 * 1. To calculate the factorial of a number.
 */
 function getFactorialOf(num) {
    if (num === 0) return 1; // base case

    return num * getFactorialOf(num-1);
}

// console.log(`Factorial of 5 is ${getFactorialOf(5)}`);   // 120
// console.log(`Factorial of 10 is ${getFactorialOf(10)}`); // 3628800

// ======================================================== //

/*
 * 2. To find the Greatest Common Divisor (gcd) of two positive numbers.
 * This is not a rucursion. See solution below
 */
 function getGCD(num1, num2) {
    let limit = (num1 < num2) ? num1 : num2;
    let greatest = 1;

    for (let i = 2; i <= num1; i++){
        if ((num1 % i === 0) && (num2 % i === 0)) {
            greatest = i;
        }
    }

    return greatest;
}

// console.log(getGCD(20,120)); // 20
// console.log(getGCD(48,120)); // 24

// -------------------------------------------------------- //
// solution
// TODO: try to get this??
let gcd = function(a, b) {
    console.log(`a: ${a}, b: ${b}`);

    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

// console.log(gcd(2154, 458)); // 2
// console.log(gcd(65,120)); // 5

// ======================================================== //

/*
 * 3. To get the integers in range (x, y).
 * Example : range(2, 9)
 * Expected Output : [2, 3, 4, 5, 6, 7, 8] // x is included
 */

 function getArrRange(start, end) {
    let arr = [start];

    if (end - start === 1) {
        return arr;
    } else {
        return arr.concat(getArrRange(start + 1, end));
    }
}

// console.log(getArrRange(5,10));

// -------------------------------------------------------- //
function getStrRange(start, end) {
    if (end - start === 1) {
        return start;
    } else {
        return start + ", " + getStrRange(start+1, end);
    }
}

// console.log(getStrRange(5,10));

// -------------------------------------------------------- //
// Solution: x is included
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
// TODO: try to understand??
function getArrRangeSolution(start_num, end_num) {
    if (end_num - start_num === 2) {
        return [start_num + 1];
    } else {
        let list = getArrRangeSolution(start_num, end_num - 1);
        list.push(end_num - 1);
        return list;
    }
}

// console.log(getArrRangeSolution(5,10));

// ======================================================== //

/*
 * 4. To compute the sum of an array of integers.
 */
 function getSum(arr) {
    let len = arr.length;

    if (len == 1) return arr[len - 1];

    return arr[len - 1] + getSum(arr.slice(0, len - 1));
}

// console.log(getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
// console.log(getSum([1, 2, 3, 4, 5, 6])); // 21

// ======================================================== //

/*
 * 5. To compute the exponent of a number.
 */
 function getPowerOf(base, exponent) {
    if (exponent === 0) return 1;
    return base * getPowerOf(base, exponent - 1);
}

// console.log(getPowerOf(2, 10)); // 1024
// console.log(getPowerOf(5, 4)); // 625

// ======================================================== //

/*
 * 6. To get the first n Fibonacci numbers.
 */

 function getFibonacciSeries(num) {
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let arr = getFibonacciSeries(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return arr;
}

// console.log(getFibonacciSeries(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

 /*
 * 6a. To get the nth Fibonacci numbers.
 */
 function getFibonacci(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;

    return getFibonacci(num - 1) + getFibonacci(num - 2);
}

// console.log(getFibonacci(10)); // 34

// ======================================================== //
/*
 * 7. To check whether a number is even or not.
 */
 function isEven(num) {
    return (num % 2 == 0) ? true : false;
}

// ======================================================== //

/*
 * 8. Write a JavaScript program for binary search.
 * 
 * Sample array : [0,1,2,3,4,5,6]
 * console.log(l.br_search(5)) will return '5' 
 */

 function binarySearch(arr, key) {
    if (arr.length === 0) return -1;

    let mid = Math.floor((arr.length / 2));

    if (arr[mid] === key) return mid;

    if (arr[mid] < key) {
        let foundIndex = binarySearch(arr.slice(mid + 1), key);
        return (foundIndex === -1) ? -1 : mid + 1 + foundIndex; 
    } 

    if (arr[mid] > key) {
        // let foundIndex = binarySearch(arr.slice(0, mid), key);
        // return  (foundIndex === -1) ? -1 : foundIndex; 

        return binarySearch(arr.slice(0, mid), key);
    }
}

// for (let i = 0; i <= 10; i++) {
//     console.log(i + " : " + binarySearch([0, 1, 2, 3, 4, 5, 6, 7], i));    
// }

// console.log("\n");

// for (let i = 1; i <= 10; i++) {
//     console.log(i * 5 + " : " + binarySearch([10, 12, 15, 18, 20, 21, 23, 25, 40, 50], i * 5));    
// }

// ======================================================== //

/*
 * 9. Write a merge sort program in JavaScript.
 * 
 * // TODO
 * 
 */
