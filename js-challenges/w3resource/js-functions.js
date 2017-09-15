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

// console.log(getIdentityMatrix(4));
// console.log(getIdentityMatrix(10));

// ======================================================== //

/*
 * 11. Write a JavaScript function which will take an array of numbers 
 * stored and find the second lowest and second greatest numbers, respectively.
 *
 * Note: input size must be at least two
 *
 *
 * // TODO - STILL INCORRECT => COME BACK LATER!!!!
 */

 function getSecondLowestGreastest(arr) {
    let lowest, secondLowest, greatest, secondGreatest;

    // initialize values
    if (arr[0] > arr[1]) {
        lowest = arr[1];
        secondLowest = arr[0];

        greatest = arr[0];
        secondGreatest = arr[1];
    } else {
        lowest = arr[0];
        secondLowest = arr[1];

        greatest = arr[1];
        secondGreatest = arr[0];    
    }

    // search for lowest, seondLowest, greatest, secondGreatest
    for(let i = 2; i < arr.length; i++) {
        let num = arr[i];
        if (num < lowest) {
            secondLowest = lowest;
            lowest = num;
        } else if ((num != lowest) && (num < secondLowest)) {
            secondLowest = num;
        }

        if (num > greatest) {
            secondGreatest = greatest;
            greatest = num;
        } else if ((num != greatest) && (num > secondGreatest)) {
            secondGreatest = num;
        }
    }

    let result = [];
    result.push(secondLowest, secondGreatest);

    return result.join(','); 
}

// console.log(getSecondLowestGreastest([1,2]));   // THE OUTPUT IS INCORRECT
// console.log(getSecondLowestGreastest([1,2,3]));
// console.log(getSecondLowestGreastest([1,2,3,4,5]));
// console.log(getSecondLowestGreastest([5,4,3,2,1]));
// console.log(getSecondLowestGreastest([3,2,1,5,2,3,4,1,5]));
// console.log('\n');

// -------------------------------------------------------- //
// using built-in sort() function
function getSecondLowestGreastest2(arr) {
    arr.sort();

    let result = [];
    result.push(arr[1], arr[arr.length - 2]);

    return result.join(','); 
}

// console.log(getSecondLowestGreastest2([1,2]));   // THE OUTPUT IS INCORRECT
// console.log(getSecondLowestGreastest2([1,2,3]));
// console.log(getSecondLowestGreastest2([1,2,3,4,5]));
// console.log(getSecondLowestGreastest2([5,4,3,2,1]));
// console.log(getSecondLowestGreastest2([1,2,1,5,2,3,4,5]));
// console.log('\n');

// -------------------------------------------------------- //
// solution from w3resource
function Second_Greatest_Lowest(arr_num) {
    arr_num.sort(function(x,y)  {
        return x-y;
    });

    var uniqa = [arr_num[0]];
    var result = [];

    for(var j=1; j < arr_num.length; j++) {
        if(arr_num[j-1] !== arr_num[j]) {
            uniqa.push(arr_num[j]);
        }
    }

    result.push(uniqa[1],uniqa[uniqa.length-2]);
    return result.join(',');
}

// console.log(Second_Greatest_Lowest([1,2]));   // THE OUTPUT IS INCORRECT
// console.log(Second_Greatest_Lowest([1,2,3]));
// console.log(Second_Greatest_Lowest([1,2,3,4,5]));
// console.log(Second_Greatest_Lowest([5,4,3,2,1]));
// console.log(Second_Greatest_Lowest([1,2,1,5,2,3,4,5]));

// ======================================================== //

/*
 * 12. To Check whether a number is perfect.
 */
 function isPerfectNumber(num) {

    if (num == 1) return false;

    let sum = 1;

    for(let i = 2; i <= (num / 2); i++) {
        if (num % i == 0) {
            sum += i;
        } 
    }

    return (num == sum);
}

// for (let i = 0; i <= 10; i++) {
//     console.log(i + ': ' + isPerfectNumber(i));
// }
// console.log('28: ' + isPerfectNumber(28));
// console.log('400: ' + isPerfectNumber(400));
// console.log('496: ' + isPerfectNumber(496));
// console.log('8000: ' + isPerfectNumber(8000));
// console.log('8128: ' + isPerfectNumber(8128));
// console.log('\n');

// -------------------------------------------------------- //

// longer than the previous solution. 
// actually, there is no array needed.
function isPerfectNumber2(num) {
    if (num == 1) return false;

    let half = Math.ceil(num / 2);

    let divisors = [];
    divisors.push(1);

    for(let i = 2; i <= half; i++) {
        if (num % i == 0) {
            divisors.push(i);
        } 
    }

    let sum = 0;
    for(let item of divisors) {
        sum += item;
    }

    return (num == sum);
}

// for (let i = 0; i <= 10; i++) {
//     console.log(i + ': ' + isPerfectNumber2(i));
// }
// console.log('28: ' + isPerfectNumber2(28));
// console.log('400: ' + isPerfectNumber2(400));
// console.log('496: ' + isPerfectNumber2(496));
// console.log('8000: ' + isPerfectNumber2(8000));
// console.log('8128: ' + isPerfectNumber2(8128));

// ======================================================== //

/*
 * 13. To compute the factors of a positive integer
 */
 function getFactorOf(num) {
    let divisors = [];

    for(let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i == 0) {
            divisors.push(i);

            if (i != num / i) {
                divisors.push(num / i);
            }
        } 
    }

    divisors.sort((a, b) => a - b);

    return divisors.join(', ');
}

// for (let i = 1; i <= 20; i++) {
//     console.log(i + ': ' + getFactorOf(i));
// }
// console.log('28: ' + getFactorOf(28));
// console.log('400: ' + getFactorOf(400));
// console.log('496: ' + getFactorOf(496));
// console.log('8128: ' + getFactorOf(8128));

// 1st solution (less efficient) - loop num / 2 times
function getFactorOf2(num) {
    let divisors = [];

    for(let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            divisors.push(i);
        } 
    }

    divisors.push(num);

    return divisors.join(', ');
}

// for (let i = 1; i <= 20; i++) {
//     console.log(i + ': ' + getFactorOf(i));
// }
// console.log('28: ' + getFactorOf2(28));
// console.log('400: ' + getFactorOf2(400));
// console.log('496: ' + getFactorOf2(496));
// console.log('8128: ' + getFactorOf2(8128));


// ======================================================== //

/*
 * 14. Write a JavaScript function to convert an amount to coins.
 *
 * Sample function : amountToCoins(46, [25, 10, 5, 2, 1])
 * Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
 * Output : 25, 10, 10, 1
 */
 function amountToCoins(amount, coins) {
    let output = []

    let coin = coins.shift();

    while (amount > 0) {
        let temp = Math.floor(amount / coin);
        
        while (temp > 0) {
            output.push(coin);
            amount -= coin;
            temp--;
        }

        coin = coins.shift();
    }

    return output.join(', ');
}

// // testing
// for (let i = 0; i <= 100; i++) {
//     console.log(i + ': ' + amountToCoins(i, [25, 10, 5, 2, 1]));
// }

// -------------------------------------------------------- //

// an interesting solution from w3resource using recursion
function amountToCoinsSolution(amount, coins) {
    if (amount === 0) {
        return [];
    } else  {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat( amountToCoinsSolution(left, coins) );
        } else {
            coins.shift();
            return amountToCoinsSolution(amount, coins);
        }
    }
} 

// // testing
// for (let i = 0; i <= 100; i++) {
//     console.log(i + ': ' + amountToCoinsSolution(i, [25, 10, 5, 2, 1]));
// }

// ======================================================== //

/*
 * 15. To compute the value of b^n where n is the exponent and b is the bases. 
 * Accept b and n from the user and display the result.
 */
 // using recursion
 function getPowerOf(b, n) {
    if (n == 0) return 1;
    if (n == 1) return b;

    return b * getPowerOf(b, n-1);
}

// // testing
// for (let b = 0; b <= 10; b++) {
//     for(let n = 0; n <= 10; n++) {
//         console.log(`b: ${b}, n: ${n}, result: ${getPowerOf(b, n)}, === ${Math.pow(b,n)}`);
//     }
// }
// for(let n = 0; n <= 100; n++) {
//     console.log(`2^n: ${n}, result: ${getPowerOf(2, n)}, === ${Math.pow(2,n)}`);
// }

// ======================================================== //

/*
 * 16. To extract unique characters from a string
 */
 function getUniqueStr(str) {
    let arr = str.split('');
    let uniqueArr = [];

    for (let char of arr) {
        if (!uniqueArr.includes(char)) {
            uniqueArr.push(char);
        }
    }

    return uniqueArr.join('');
}

// console.log(getUniqueStr('abccdeffghijjkklmnoppqrssstuvvwwxyzzz')); // abcdefghijklmnopqrstuvwxyz
// console.log(getUniqueStr('abccdeffghijjkklmnoppqrssstuvvwwxyzzz').length); // 26

// ======================================================== //

/*
 * 17. To  get the number of occurrences of each letter in specified string
 *
 * // TODO: change array to object a-z
 */
 function getNumOccurences(str) {

    let cleanedStr = str.toLowerCase().replace(/\s/g, '');
    let arr = new Array(26).fill(0);

    for(let i = 0; i < cleanedStr.length; i++) {
        let pos = cleanedStr.codePointAt(i) - 97; // the Unicode code point value of 'a' is 97

        arr[pos]++;
    }

    return arr;
}
// console.log('aaaaabccdeff ghijjkklmnoppqrss stuvvwwxyyzzz');
// console.log(getNumOccurences('aaaaabccdeff ghijjkklmnoppqrss stuvvwwxyyzzz'));


// -------------------------------------------------------- //

// solution from w3resource ???
// TODO
function Char_Counts_solution(str1) {
    var uchars = {};
    str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
    return uchars;
}

// console.log(Char_Counts_solution("The quick brown fox jumps over the lazy dog"));
// console.log(Char_Counts_solution('aaaazz'));

// ======================================================== //

/*
 * 18. Searching JavaScript arrays with a binary search
 *
 * the input 'arr' has to be sorted.
 */

 function binarySearch(arr, key) {
    let lo = 0,
    hi = arr.length - 1,
    mid,
    item;

    while(lo <= hi) {
        // mid = Math.floor((lo + hi) / 2, 10),
        mid = Math.floor((lo + hi) / 2),

        item = arr[mid];

        if (item < key) {
            lo = mid + 1;
        } else if(item > key) {
            hi = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

// let arr18 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr18);
// for (let i = 0; i < arr18.length; i++) {
//     console.log(i + ': ' + binarySearch(arr18, i));    
// }
// console.log('\n');  

// let arr18a = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// console.log(arr18a);
// for (let i = 0; i < arr18a.length; i++) {
//     console.log(i * 5 + ': ' + binarySearch(arr18a, i * 5));    
// }
// console.log('\n');  

// let arr18b = [15, 20, 25];
// console.log('21: ' + binarySearch(arr18b, 21));

// -------------------------------------------------------- //
// incorrect solution using recursion!!!
// TODO
function binarySearchRecursion(arr, num) {
    let mid = Math.floor(arr.length / 2);

    if (num === arr[mid]) {
        return mid;
    } else if (arr.length == 1) {
        return null;
    } else if (num < arr[mid]) {
        console.log('test2: ' + mid);
        return binarySearch(arr.slice(0, mid), num);
    } else if (num > arr[mid]) { // num > arr[mid]
        console.log('test3: ' + mid);
        return mid + binarySearch(arr.slice(mid,arr.length), num);
    }
}
// ======================================================== //

/*
 * 19. Returns array elements larger than a number
 */
 function getLarger(arr, num) {
    return arr.filter((item) => item > num);
}

let arr19 = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// console.log(getLarger(arr19, 10));
// console.log(getLarger(arr19, 20));
// console.log(getLarger(arr19, 30));
// console.log(getLarger(arr19, 50));

// ======================================================== //

/*
 * 20. Generates a string id (specified length) of random characters
 */
 function generatesID(len) {
    let randomId = '';

    for (let i = 0; i < len; i++) {
        randomId += getRandomLetter();
    }

    return randomId;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

function getRandomLetter() {
    let charType, ascii;

    let rand = getRandomNumber(1,3)
    if (rand == 1) {
        charType = "upper";
    } else if (rand == 2) {
        charType = "lower";
    } else { // 3
        charType = "number";
    }

    if (charType == "upper") {
        ascii = getRandomNumber(65, 90);    // A - Z
    } else if (charType == "lower") {
        ascii = getRandomNumber(97, 122);   // a - z
    } else {// number
        ascii = getRandomNumber(48, 57);    // 0 - 9
    }

    return String.fromCharCode(ascii);
}

// for (let i = 10; i<= 20; i++) {
//     let id = generatesID(i)
//     console.log('Random ID: ' + id + ' : ' + id.length);
// }

// -------------------------------------------------------- //
// solution from w3resource
function makeid(l) {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < l; i++ ) {  
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }

    return text;
}

// for (let i = 10; i<= 20; i++) {
//     let id = makeid(i)
//     console.log('Random ID: ' + id + ' : ' + id.length);
// }


// ======================================================== //

/*
 * 21. To get all possible subset with a fixed length (for example 2) combinations in an array
 */

// ======================================================== //

/*
 * 22. Write a JavaScript function that accepts two arguments, a string and a letter 
 * and the function will count the number of occurrences of the specified letter within the string. 
 */
 function countOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count++;
        }
    }

    return count;
 }

 console.log(countOccurrences('w3resoooource.com', 'o'));

// ======================================================== //

/*
 * 23 To find the first not repeated character
 */

// ======================================================== //

/*
 * 24. To apply Bubble Sort algorithm
 */

// ======================================================== //

/*
 * 25. To accept a list of country names as input 
 * and returns the longest country name as output. 
 */

// ======================================================== //

/*
 * 26. To find longest substring in a given a string without repeating characters.
 */

// ======================================================== //

/*
 * 27. To return the longest palindrome in a given string.
 */

// ======================================================== //

/*
 * 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
 */

// ======================================================== //

/*
 * 29. Write a JavaScript function to get the function name.
 */

// ======================================================== //