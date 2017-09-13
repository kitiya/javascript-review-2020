/*
 * Ref: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
 */

/* 
 * 1. Write a JavaScript program to display the current day and time in the following format
 * Sample Output : Today is : Friday. 
 * Current time is : 4 PM : 50 : 22
 */
 function displayDate() {
  let date = new Date();

  let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let day = dayList[date.getDay()];
  let hour = date.getHours() % 12;
  let suffix = (Math.floor(date.getHours() / 12) == 0) ? 'AM' : 'PM';
  let minute = date.getMinutes();
  let second = date.getSeconds();

  /* return 'Today is : ' + day + '.\n' + 
  'Current time is : ' + hour + ' ' + suffix + ' : ' + minute + ' : ' + second; */

  // using "Template String"
  // Be aware that template strings are surrounded by backticks ` instead of (single) quotes.
  return `Today is : ${day}.\nCurrent time is : ${hour} ${suffix} : ${minute} : ${second}`;
}

//console.log(displayDate());

// ======================================================== //

/*
 * 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 
 *
 * Note:
 * Let a,b,c be the lengths of the sides of a triangle. The area is given by:
 * Area =  (p(p − a)(p − b)(p − c)^1/2    
 * where p is half the perimeter, or (a + b + c)/2
 */ 
 function areaOfTriangle(a, b, c) {

  let p = (a + b + c) / 2;

  return Math.sqrt(p * (p - a) * (p - b) * (p - c));

}

 // console.log('area is: ' + areaOfTriangle(5, 6, 7));

// ======================================================== //

/*
 * 5. Write a JavaScript program to rotate the string 'w3resource' in right direction 
 * by periodically removing one letter from the end of the string and attaching it to the front. 
 */
 function rotateString(str) {
  return str.slice(-1)  + str.slice(0, str.length - 1);
}

 // console.log(rotateString('w3resource'));
 // console.log(rotateString('w3r'));
 // console.log(rotateString('w'));
 // console.log(rotateString(''));


// ======================================================== //

/* 
 * 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
 */
 function sunday1st(from, to) {
  let yearList = [];
  for (let year = from; year <= to; year++) {
    let date = new Date(year, 0);

    if (date.getDay() === 0) { // sunday
      yearList.push(year);
    }
  }

  return yearList;
}

 // console.log(sunday1st(2014, 2050));

// ======================================================== //

/* 8. Write a JavaScript program where the program takes a random integer between 1 to 10, 
 * the user is then prompted to input a guess number. 
 * If the user input matches with guess number, 
 * the program will display a message "Good Work" otherwise display a message "Not matched".
 */

 function guess10() {
  // Get a random integer from 1 to 10 inclusive
  let target = Math.ceil(Math.random() * 100);
  console.log(`Target: ${target}`);

  let start = 1;
  let end = 100;

  let attempt = 1;

  while(true) {
    let guessNum = prompt(`attempt#${attempt} - Guess a number between ${start} to ${end} inclusive: `);
    console.log(guessNum);

    // check if guessNum is empty (enter) or null (cancel or close)
    if (guessNum === "" || guessNum === null) {
      alert('Goodbye!');
      break;
    }

    if (guessNum > target) {
      end = +guessNum - 1;
      alert('Too large!');
    } else if (guessNum < target) {
      start = +guessNum + 1;
      alert('Too small!');
    } else {
      alert(`Good Work! You got it in ${attempt} attempts.`);
      break;
    }
    attempt++;
  }
}

// guess10();

// ======================================================== //

/*
 * 9. Write a JavaScript program to calculate days left until next Christmas.
 */
 function daysUntilChrismas() {
  let today = new Date();

  // increase year if today is between 26-31 december
  let year = (today.getMonth() == 11 && today.getDate() > 25) ? today.getFullYear() + 1 : today.getFullYear();

  let nextXMas = new Date(year, 11, 25);

  let diff = nextXMas - today;

  return Math.ceil(diff / 1000 / 60 / 60 / 24); // convert from milliseconds to days
}

//console.log(daysUntilChrismas() + ' days left until Christmas!');

// -------------------------------------------------------- //
// alternative solution
function daysUntilChrismas2() {
  let today = new Date();
  let cmas = new Date(today.getFullYear(), 11, 25);

  if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1); 
  }  

  let one_day = 1000 * 60 * 60 * 24;
  
  return Math.ceil((cmas.getTime() - today.getTime()) / one_day);
}

// ======================================================== //

/*
 * 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 
 */

// ======================================================== //

/*
 * 12. Write a JavaScript program to get the website URL (loading page).
 */

// ======================================================== //

/*
 * 13. Write a JavaScript exercise to create a variable using a user-defined name.
 */

// ======================================================== //

/*
 * 14. Write a JavaScript exercise to get the extension of a filename.
 */

// ======================================================== //

/*
 *20. Write a JavaScript program to check from two given integers, if one is positive and one is negative.
 */
 function isPosNeg(num1, num2) {
  return (num1 * num2 < 0) ? true : false;
}

// console.log(isPosNeg(5,3));    // false
// console.log(isPosNeg(5,-3));   // true
// console.log(isPosNeg(-5,3));   // true
// console.log(isPosNeg(-5,-3));  // false
// console.log(isPosNeg(0,-3));   // false

// -------------------------------------------------------- //
// a solution from w3resource.com
function positive_negative(x, y)
{
  if ((x < 0 && y > 0) || x > 0 && y < 0) {
    return true;
  } else {
    return false;
  }
}

// ======================================================== //

/*
 * 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. 
 * If the given string begins with "Py" then return the original string. 
 */
 function addPy(str) {
  // check if str is null or undefined first
  // because the slice() function will throw an exception if str is null or undefined
  if ((str === null) || (str === undefined) || (str.slice(0,2) === 'Py')) {
    return str;
  } 

  return 'Py' + str;  
}

// console.log(addPy('thon'));     // Python
// console.log(addPy('python'));   // Pypython
// console.log(addPy('Python'));   // Python
// console.log(addPy(''));         // Py
// console.log(addPy(null));       // null
// console.log(addPy(undefined));  // undefined

// ======================================================== //

/*
 * 22. Write a JavaScript program to remove a character at the specified position of a given string 
 * and return the new string.
 */
 function removeChar(str, pos) {
  if ((str === null) || (str === undefined) || (str.length < pos)) {
    return str;
  }

  return str.slice(0, pos) + str.slice(pos + 1);
}

// console.log(removeChar('w3resource', 0));
// console.log(removeChar('w3resource', 8));
// console.log(removeChar('w3resource', 9));
// console.log(removeChar('w3resource', 10));

// console.log(removeChar(null, 0));
// console.log(removeChar(undefined, 0));

// -------------------------------------------------------- //
// a solution from w3resource.com
// got an error when str is null or undefined
function remove_character(str, char_pos) 
{
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
}

// console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));
// console.log(remove_character("Python",6));

/*
// console.log(remove_character(null,0));       // got error
// console.log(remove_character(undefined,0));  // got error
*/

// ======================================================== //

/*
 * 25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
 */
 function isMultipleOf3or7(num) {
  // return false if num is not a numeric value
  if (isNaN(parseFloat(num)) || !isFinite(num)) {
    return false;
  }

  return ((num % 3 === 0) || (num % 7 === 0)) ? true : false;
}

// console.log(isMultipleOf3or7(3));   // true
// console.log(isMultipleOf3or7(7));   // true
// console.log(isMultipleOf3or7(15));  // true
// console.log(isMultipleOf3or7(20));  // false
// console.log(isMultipleOf3or7(21));  // true

// console.log(isMultipleOf3or7(''));    // false (return true if doesn't check for numeric)
// console.log(isMultipleOf3or7(null));  // false (return true if doesn't check ror numeric)
// console.log(isMultipleOf3or7('s'));   // false

// ======================================================== //

/*
 * 30. Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, 
 * if "Script" presents in the string return the string without "Script" otherwise return the original one.
 *
 * assume the input is a string
 */

 function checkScriptPos5(str){
  if (str.length < 6) {
    return str;
  }

  let str5 = str.slice(4,10);

  return (str5 === 'Script') ? str.slice(0,4) + str.slice(10) : str;

}

 // console.log(checkScriptPos5('java'));                 // java
 // console.log(checkScriptPos5('w3resource'));           // w3resource
 // console.log(checkScriptPos5('JavaScript tutorial'));  // Java tutorial
 // console.log(checkScriptPos5(''));                     // 

// ======================================================== //

/*
 * 48. Write a JavaScript program to reverse a given string.
 *
 * Note:
 * Three Ways to Reverse a String in JavaScript
 *   1. Reverse a String With Built-In Functions
 *   2. Reverse a String With a Decrementing For Loop
 *   3. Reverse a String With Recursion
 */

// 1. Reverse a String With Built-In Functions
function reverseString1(str) {
  let arr = str.split('');

  arr.reverse();

  return arr.join('');
  
}

// console.log(reverseString1("JavaScript"));

 // 2. Reverse a String With a Decrementing For Loop
 function reverseString2(str) {
  let reverseStr = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

// console.log(reverseString2("JavaScript"));

 // 3. Reverse a String With Recursion
 function reverseString3(str) {
  if (str.length == 1) {
    return str;
  }

  return str[str.length - 1] + reverseString3(str.slice(0, str.length - 1));
}

// console.log(reverseString3("JavaScript"));

// ======================================================== //

/*
 * 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. 
 */
 function shiftAlphabet(str) {
  let shiftStr = '';
  for(let i = 0; i < str.length; i++) {
    shiftStr += String.fromCodePoint(str.codePointAt(i) + 1);
  }

  return shiftStr;
} 

// console.log(shiftAlphabet('AbcDefGhiJklMnoPqrStuVwxYz'));

// ======================================================== //

/*
 * 50. Write a JavaScript program to capitalize the first letter of each word of a given string.
 */
 function capitalizeWords(words) {
  let arr = words.split(' ');
  
  arr = arr.map((str) => {
    return str.slice(0,1).toUpperCase() + str.slice(1);
  })

  return arr.join(' ');
}

// console.log(capitalizeWords('capitalize the first letter of each word of a given string!'));

// ======================================================== //

/*
* 52. Write a JavaScript program to convert the letters of a given string in alphabetical order
*/

function sortString(str) {

  return str.split('').sort().join('');
}

// console.log(sortString('JavaScript'));

// ======================================================== //

/*
 * 53. Write a JavaScript program to check 
 * if the characters a and b are separated by exactly 3 places 
 * anywhere (at least once) in a given string.
 *
 * (see solution - using truncate ellipsis ...)
 */
 function separated3(str, char1, char2) {
  let arrIndex1 = getIndex(str, char1);
  let arrIndex2 = getIndex(str, char2);

  if ((arrIndex1.length == 0) || (arrIndex2.length == 0)) {
    return false;
  }

  for (let i = 0; i < arrIndex1.length; i++) {
    for (let j = 0; j < arrIndex2.length; j++) {
      let diff = Math.abs(arrIndex1[i] - arrIndex2[j]);
      if (diff == 3) {
        return true;
      }
    }
  }


  return false;
}

function getIndex(str, target) {
  let pos = 0;
  let arrIndex = [];
  while(true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    arrIndex.push(foundPos);
    pos = foundPos + 1;
  }

  return arrIndex;
}

// console.log(separated3('JavaScript', 'J', 'a' )); // true
// console.log(separated3('JavaScript', 'J', 'r' )); // false
// console.log(separated3('JavaScript', 'S', 'a' )); // true
// console.log(separated3('JavaScript', 's', 'a' )); // false
// console.log(separated3('JavaScript', 'S', 'p' )); // false
// console.log(separated3('JavaScript', 'a', 'r' )); // true
// console.log(separated3('JavaScript', 't', 'r' )); // true

// -------------------------------------------------------- //

/*
 * an interesting solution from w3resource.com
 *
 * This solution uses regular expression 
 * 
 * Syntax: /pattern/modifiers;
 *
 * dot (.) find a single character, except newline or lineteminator
 */
 function ab_Check(str)
 {
  return (/a...b/).test(str) || (/b...a/).test(str);
}

// console.log(ab_Check("Chainsbreak"));
// console.log(ab_Check("pane borrowed"));
// console.log(ab_Check("abCheck"));

// ======================================================== //

/*
 * 54. Write a JavaScript program to count the number of vowels in a given string.
 */
 function countVowels(str) {
  let numVowels = 0;

  let strArr = str.split('');

  for (let ch of strArr){
    if ((ch == 'a') || (ch == 'e') || (ch == 'i') || (ch == 'o') || (ch == 'u')) {
      numVowels++;
    }
  }

  return numVowels;
}

// console.log(countVowels('abcidaa'));

// -------------------------------------------------------- //

/*a solution from w3resource.com - using regular expression 
 *
 * Syntax: /pattern/modifiers;
 *
 * [^abc] Find any character NOT between the brackets
 *
 * i: Perform case-insensitive matching
 * g: Perform a global match (find all matches rather than stopping after the first match)
 *
 */

 function vowel_Count(str) {
  // remove all characters except a,e,i,o,u
  return str.replace(/[^aeiou]/ig, "").length; 
}

// console.log(vowel_Count('abcidaa'));        // 4
// console.log(vowel_Count("Python"));         // 1
// console.log(vowel_Count("w3resource.cOm")); // 5

// ======================================================== //

/*
 * TAG: Regular Expression
 *
 * 55. Write a JavaScript program to check if a given string contains equal number of p's and t's present.
 */

 function equalLengthPT(str){
  let lenP = str.replace(/[^p]/ig, "").length;
  let lenT = str.replace(/[^t]/ig, "").length;

  return lenP === lenT;
}

// console.log(equalLengthPT('ppplttt'));  // true
// console.log(equalLengthPT('pppltt'));   // false
// console.log(equalLengthPT(''));         // true

// ======================================================== //

/*
 * 56. Write a JavaScript program to divide two positive numbers 
 * and return a string with properly formatted commas.
 */
 function divisionToString(numerator, denominator ){
  if (numerator <= 0 || denominator <= 0) {
    return false;
  }

  let result = (numerator / denominator);
  
  let decimal = Math.floor(result);                   // 166666
  let points = Math.round((result - decimal) * 100);  // 67

  let arr = decimal.toString().split('');
  let newArr = [];

  let str = '';
  let count = 0;
  for(let i = arr.length - 1; i >= 0; i--) {
    str = arr[i] + str;
    count++;

    if (count == 3) {
      newArr.push(str);
      str = '';
      count = 0;
    }
  }

  newArr.reverse();           // ['166', '666']

  decimal = newArr.join(','); // 166,166

  return decimal + '.' + points; 
}

// console.log(divisionToString(500000,3));  // 166,666.67


// -------------------------------------------------------- //

// a solution from w3resource.com
function division_string(n1, n2) {
  if (n1 <= 0 || n2 <= 0)
    return false;

  let result = Math.floor(n1 / n2).toString();
  let resultArr = result.split('');

  if (result >= 100) {
    for (let i = result.length - 3; i > 0; i -=3) {
      resultArr.splice(i, 0, ',');
    }
  }

  return resultArr.join('');
}

// console.log(division_string(5000000000,3)); // 1,666,666,666



// ======================================================== //

/*
 * TAG: String
 *
 * 59. To extract the first half of a string of even length.
 */
 function getFirstHalf(str) {
  return str.slice(0,str.length/2);
}

// console.log(getFirstHalf('abcdef'));  // abc

// ======================================================== //

/*
 * TAG: String
 *
 * 60. To create a new string without the first and last character of a given string.
 */
 function remove2Ends(str) {
  return str.slice(1,str.length - 1);
}

// console.log(remove2Ends('ab'));       // ''
// console.log(remove2Ends('abc'));      // b
// console.log(remove2Ends('abcdef'));   // bcde

// ======================================================== //

/*
 * TAG: String
 *
 * 63. To create a string using the middle three characters of a given string of odd length. 
 * The string length must be greater or equal to three.
 */
 function getMiddleThree(str) {
  let pos = Math.floor(str.length/2);

  return str.slice(pos - 1, pos + 2);
}

 // console.log(getMiddleThree('abcde'));    // bcd (odd length)
 // console.log(getMiddleThree('ab'));       // ab
 // console.log(getMiddleThree('abcd'));     // bcd (even length)

// ======================================================== //

/*
 * 70. To rotate the elements left of a given array of integers. 
 */
 
 function rotateArrayLeft(arr) {
  let len = arr.length;

  // using concat() to join 2 arrays
  return arr.slice(len - 1).concat(arr.slice(0, len - 1));  //[7] + [1, 2, 3, 4, 5, 6]
} 
// console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7]));    // [7, 1, 2, 3, 4, 5, 6]

/*
 * To rotate the elements left 3 times of a given array of integers. 
 */

 function rotateArray3Left(arr) {
  let len = arr.length;

  // using concat() to join 2 arrays
  return arr.slice(len - 3).concat(arr.slice(0, len - 3));  //[5, 6, 7] + [1, 2, 3, 4]
} 
// console.log(rotateArray3Left([1, 2, 3, 4, 5, 6, 7]));    // [5, 6, 7, 1, 2, 3, 4]

// ======================================================== //

/*
 * 77. To test if an array of integers contains 1 or a 3.
 */
function containOneOrThree(arr) {
  return (arr.includes(1) || arr.includes(3));
}

// console.log(containOneOrThree([1, 2]));     // true
// console.log(containOneOrThree([1, 2, 3]));  // true
// console.log(containOneOrThree([3, 4, 5]));  // true 
// console.log(containOneOrThree([4, 5]));     // false
// console.log(containOneOrThree([]));         // false

// ======================================================== //

/*
 * 78. To test if an array of integers does not contains 1 or a 3.
 */
function noOneNorThree(arr) {
  return (!arr.includes(1) && !arr.includes(3));
}

// console.log(noOneNorThree([1, 2]));     // false
// console.log(noOneNorThree([1, 2, 3]));  // false
// console.log(noOneNorThree([3, 4, 5]));  // false 
// console.log(noOneNorThree([4, 5]));     // true
// console.log(noOneNorThree([]));         // true

// ======================================================== //

/*
 * 80. To swap the first and last elements of a given array of integers. 
 * The array length should be at least 1.
 */
 function swapFirstLast(arr) {
  let len = arr.length;

  let first = arr.slice(0,1);
  let mid = arr.slice(1,len-1);
  let last = arr.slice(len-1);

  return last.concat(mid).concat(first);
 }

 // console.log(swapFirstLast([1, 2, 3, 4, 5, 6, 7]));    // [7, 2, 3, 4, 5, 6, 1]