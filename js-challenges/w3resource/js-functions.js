/*
 * Ref: https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
 */

 // ======================================================== //

/*
 * 1. To reverse a number.
 */

 function reverseNumber(num) {
    return +num.toString().split('').reverse().join('');
}

// console.log(reverseNumber(1234567));            // 7654321
// console.log(typeof(reverseNumber(1234567)));    // number

// ======================================================== //

/*
 * 2. To check whether a passed string is palindrome or not?
 *
 * A palindrome is word, phrase, or sequence that reads the same backward as forward, 
 * e.g., madam or nurses run.
 */
 function isPalindrome(strWithSpace) {
    // Change the string into lower case and remove  all non-alphanumeric characters
    let str = strWithSpace.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');

    // convert the clened string into array
    let arr = str.split('');
    let len = arr.length;

    // return false if the string is empty
    if (len == 0) return false;

    // ignore the middle value when having odd length
    let half = Math.floor(len / 2); 

    for (let i = 0; i <= half; i++) {
        let left = arr[i];
        let right = arr[len-1-i];

        if (left !== right) {
            return false;
        }
    }

    return true;
}

// console.log(isPalindrome('Nurses run'));    // true
// console.log(isPalindrome('palindrome'));    // false
// console.log(isPalindrome('PHP'));           // true
// console.log(isPalindrome('phHP'));          // true
// console.log(isPalindrome(''));              // false
// console.log(isPalindrome('x'));             // true

// ======================================================== //

/*
 * 3. To generate all combinations of a string.
 *
 * Example string : 'dog' 
 * Expected Output : d,do,dog,o,og,g 
 */

 function buildString(word) {
    let arr = word.split('');

    let result = [];

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j <= word.length; j++) {
            result.push(word.slice(i, j));
        }
    }

    return result
}

// console.log(buildString('dogs'));
// console.log(buildString('123456'));

// ======================================================== //

/*
 * 4. To return a passed string with letters in alphabetical order.
 */
 function sortString(str) {
    return str.split('').sort().join('');
}

// console.log(sortString('abcdefg'));     // abcdefg
// console.log(sortString('webmaster'));   // abeemrstw

// ======================================================== //

/*
 * 6. To find the longest word within a string
 */
 function getLogestWord(sentence) {
    let arr = sentence.split(' ');

    let longestWord = sentence[0];

    for (let word of arr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// console.log(getLogestWord('Web Development Tutorial' ));

// -------------------------------------------------------- //

function getLogestWord1(sentence) {
    let arr = sentence.split(' ');

    let longestWord = sentence[0];

    // using forEach()
    arr.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

// console.log(getLogestWord1('Web Development Tutorial' ));

// ======================================================== //

/*
 * 8. To check if a number is prime or not
 */
 function isPrime(num) {
    if (num === 2) return true;

    if ((num < 2) || (num % 2 === 0)) return false;

    let top = Math.ceil(Math.sqrt(num));

    //  try up to the square root of the number.
    for (let i = 3; i <= top; i++) {
        if ((num % i) === 0) {
            return false;
        }
    }

    return true;
}


// // for testing
// for (let i = 1; i <= 15; i++) {
//     console.log(i + ': ' + isPrime(i));
// }

// console.log('99923: ' + isPrime(99923));
// console.log('104729: ' + isPrime(104729));
// console.log('104731: ' + isPrime(104731));

// -------------------------------------------------------- //
/*
 * 8.1 To find nth prime number
 */
 function getNthPrime(num) {
    if (num == 1) return 2;

    let n = 1;
    let i = 1;

    let primeNum = null;

    while(n < num) {
        let oddNum = i*2 + 1;
        if (isPrime(oddNum)) {
            primeNum = oddNum;
            n++;
        }
        i++;
    }

    return primeNum;
}

// // for testing
// for (let i = 1; i <= 25; i++) {
//     console.log((i * 10) + 'th : ' + getNthPrime(i * 10));
// }

// console.log('10,000th : ' + getNthPrime(10000));        // 104,729
// console.log('1,000,000th : ' + getNthPrime(1000000));   // 15,485,863 (took 10 seconds to calculate)

// ======================================================== //

/*
 * 9. To return type of an argument
 * 
 * Note : There are seven possible values that typeof returns: 
 * number, string, boolean, object, function, symbol, and undefined.
 */

 function getTypeOf(arg){
    return typeof arg;
}

// console.log('0129: ' + getTypeOf(0129));                        // number
// console.log('string: ' + getTypeOf('string'));                  // string
// console.log('true: ' + getTypeOf(true));                        // boolean
// console.log('{name: "john"}: ' + getTypeOf({name: 'john'}));    // object
// console.log('null: ' + getTypeOf(null));                        // object
// console.log('alert: ' + getTypeOf(alert));                      // function
// console.log('function() {}: ' + getTypeOf(function() {}));      // function
// console.log('undefined: ' + getTypeOf(undefined));              // undefined
// console.log('Symbol("id"): ' + getTypeOf(Symbol("id")));        // symbol

// ======================================================== //

/*
 * 10. To return the n rows by n columns identity matrix.
 */

 function getIdentityMatrix(n) {
    let matrix = new Array(n);


    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);

        for (let j = 0; j < n; j++) {
            if (i == j) {
                matrix[i][j] = 1;
            } else {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
 }

console.log(getIdentityMatrix(4));
console.log(getIdentityMatrix(10));

// ======================================================== //

/*
 * 11. Write a JavaScript function which will take an array of numbers 
 * stored and find the second lowest and second greatest numbers, respectively.
 */

 function getSecondMinMax() {

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