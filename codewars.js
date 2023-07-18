// ****** map, filter, reduce START ******

//  return the factorial using `map() fill() reduce()`
function factorial(n) {
  return (
    new Array(n) // [`n` empty slots]
      .fill(null) // [null, null, null, null, null, null]
      // must fill array or else: Uncaught TypeError: reduce of empty array
      //with no initial value. NB: we could use .fill() without null
      // the array would then be filled with `undefined`
      .map((currVal, i) => i + 1) // [1,2,3,4,5,6] this is now the array
      // that will be processed by `reduce()`:
      .reduce((acc, curr) => acc * curr) // 1*2*3*4*5*6 => 720
  );
}
console.log(factorial(6)); // 720

// return the first and last letters of each word with the number
// of letters between them i.e. "good" = "g2d"
// ignore words of less than 4 characters

function Numeronyms(str) {
  // re-useable function. Could have imported this as a module
  // using it makes our `return` code more readable
  const createEnumeronym = (word) =>
    // 1st ltr of the word + word length - 2 + last letter of the word
    word[0] + (word.length - 2) + word[word.length - 1];

  return str
    .split(" ")
    .map((v) => (v.length >= 4 ? createEnumeronym(v) : v))
    .join(" "); //"E3y d7r l3s to mix k8s and j8t"
}
// console.log(
//   Numeronyms("Every developer likes to mix kubernetes and javascript")
// );

// https://www.crocoder.dev/blog/map-filter-reduce-exercises/

// return youngest & oldest and difference given an array
// of objects holding names and ages
function youngOld(arr) {
  const ages = arr.map((v) => v.age);
  return [
    Math.min(...ages),
    Math.max(...ages),
    Math.max(...ages) - Math.min(...ages),
  ];
}
/*
console.log(
  youngOld([
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ])
);
*/

// return the first letter of each name
function firstLtr(str) {
  return str
    .split(" ")
    .map((v) => v[0])
    .join("");
}
// console.log(firstLtr("George Raymond Richard Martin"));

// calc mean & median:
// mean = sum of numbers divided by number of numbers i.e. average!
// median is the middle of a sorted list of numbers
function meanMedian(arr) {
  const mean = arr.reduce((acc, curr, i, arr) => acc + curr) / arr.length;

  let median = arr.sort((a, b) => a - b);

  median.median =
    median.length % 2 === 0
      ? (median[median.length / 2] + median[median.length / 2 - 1]) / 2
      : median[Math.ceil(median.length / 2 - 1)];

  console.log(median);
  return `mean: ${mean} median: ${median.median}`;
}
// console.log(meanMedian([12, 46, 32, 64]));

// Sum of every positive element
// [1, -4, 12, 0, -3, 29, -150];
// filter positves then reduce by adding each
// note the start value of zero which prevents an error if arr is empty
function sumPositives(arr) {
  return arr.filter((n) => n > 0).reduce((acc, curr) => acc + curr, 0);
}
// console.log(sumPositives([]));

// const input = [1, 2, 3, 4, 5]; square every number using `.map()`
function squares(arr) {
  return arr.map((n) => Math.pow(n, 2));
}
// console.log(squares([1, 2, 3, 4, 5]));

// ****** map, filter, reduce END ******

//  "String" -> "SSttrriinngg"
function string(str) {
  let res = "";

  str.split("").forEach((el) => (res += el.repeat(2)));

  return res;
}
// one liner!
const double = (str) =>
  str
    .split("")
    .map((el) => el + el)
    .join("");

// console.log(string("String"));
// console.log(double("String"));
//  draw a diamond:
/*
    Input = 5
       *
      ***
     *****
      ***
       *
       
      "  *\n ***\n*****\n ***\n  *\n"
*/
function diamond(n) {
  return n % 2 === 0 || n < 0 ? null : draw(n);

  function draw(n) {
    let str = "";

    const mid = Math.floor(n / 2) + 1;

    for (let i = 1; i <= n; i++) {
      const space = " ";
      const numSpaces = Math.abs(i - mid);

      const char = "*";
      const numChars = n - numSpaces * 2;

      str += space.repeat(numSpaces) + char.repeat(numChars) + "\n";
    }
    return str;
  }
}
// console.log(diamond(3));

// [1,2,3,4,6,7,8] find first non-consecutive number
function firstNonConsecutive(arr) {
  const idx = arr.findIndex(
    (num, index) => index > 0 && num !== arr[index - 1] + 1
  );

  return idx !== -1 ? idx : null;
}
// console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(10 ** 20);

/*
    number of hotdogs 	price per unit (cents)
    n < 5 	100
    n >= 5 and n < 10 	95
    n >= 10 	90
*/
const saleHotdogs = (n) =>
  n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;

/* string to number
    "1234" --> 1234
    "605"  --> 605
    "1405" --> 1405
    "-7" --> -7
*/

function stringToNumber(str) {
  return Number(str);
}
// console.log(stringToNumber("1234"));

// count fuking sheep
const sheepAtHome = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  undefined,
  null,
  true,
  true,
];

function countSheep(arr) {
  let tot = 0;
  arr.forEach((sheep) => (sheep === true ? tot++ : false));

  return tot;
}

// console.log(countSheep(sheepAtHome));

// .sort((a, b) => b - a)

//  [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
const grow = (arr) => arr.reduce((acc, curr) => acc * curr);

// console.log(grow([1, 2, 3, 4]));

// alphabetPosition("The sunset sets at twelve o' clock.")
// return a string with the position of each character in the alphabet
// charCode minus 96 gives position in alphabet
function alphabetPosition(str) {
  // const strLC = str.toLowerCase();
  const strLC = Array.from(str.toLowerCase());

  return strLC
    .map((char) => {
      const charCode = char.charCodeAt();
      return charCode < 97 || charCode > 122 ? "" : `${charCode - 96} `;
    })
    .join("")
    .trim();
}
// 97 - 122 = a-z = -96
// 65 - 90 = A - Z = -64
// console.log(alphabetPosition("The sunset sets at twelve o' clock."), 122 - 96);

// return the volume of a cuboid
const vol = (l, w, h) => l * w * h;
// console.log(vol(2, 2, 3));

// calculate the number of pages required for n people & m pages
// return zero if n or m are less than zero
function numOfPages(n, m) {
  return n < 0 ? 0 : m < 0 ? 0 : n * m;
}
// console.log(numOfPages(5, -5));

// return highest & lowest: highAndLow("1 2 3 4 5");  // return "5 1"
function highAndLow(str) {
  const arr = str.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
// console.log(highAndLow("1 2 3 4 5"));

// To return odd or even divide by two, check remainder is 0
const evenOrOdd = (int) => (int % 2 === 0 ? "Even" : "Odd");
// console.log(evenOrOdd(50));

// return the third interior angle of the triangle
const otherAngle = (a, b) => 180 - (a + b);

// console.log(otherAngle(90, 60));

// return sum as a number
function sumMix(arr) {
  return Number(arr.reduce((a, c) => Number(a) + Number(c)));
}

// console.log(sumMix(["1", 2, 3, "4", 5]));

// return min and max values from the array
// All arrays will have at least one element
/*
    [1,2,3,4,5] --> [1,5]
    [2334454,5] --> [5,2334454]
    [1]         --> [1,1]
*/
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
const arr = [5, 5];
// console.log(minMax(arr));

// test if number is a perfect square
function isSquare(num) {
  // check the square root of `num` is an integer
  return Math.sqrt(num) % 1 === 0;
}
const num = 121;
// console.log(isSquare(num));

/*
    Each element in the array represents a line of text.
    Add a line number with a colon and a space
    [] --> []
    ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/
const input = [
  "line of text No.1",
  "line of text No.2",
  "line of text No.3",
  "line of text No.4",
];

function testLineNums(arr) {
  // add the index No. + 1 plus a colon and a space to each string in the array
  return arr.map((el, idx) => `${idx + 1}: ${el}`);
}

// console.log(testLineNums(input));

// count the occurance of letters
// return {a: 2, b: 1, etc...}
const str =
  "Aabaabazzdfeffdabaabazzdfeffdabaabazzdfeffdabaabazzdfeffdabaabazzdfeffd";
function count(str) {
  const o = {};
  // iterate over str
  // check current character is a property of `o`?
  // `yes` prop' value += ` or add prop + value of 1

  for (let i = 0; i < str.length; i++) {
    Object.hasOwn(o, str[i]) ? (o[str[i]] += 1) : (o[str[i]] = 1);
  }

  console.log(o);
  return o;
}

// count(str);

// contains all letters: 'abcdefghijklmnopqrstuvwxyz' ?
// is it a panagram?

function isPanagram(str) {
  const aToz = "abcdefghijklmnopqrstuvwxyz".split("");
  str = str.toLowerCase();
  return aToz.every((x) => str.includes(x));
}

// console.log(isPanagram("pants bcdefghijklm oqr tuvwx yz"));

// alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

// const isPanagram = (string) => {
//   // string = string.toLowerCase();
//   return aToz.split("").every((x) => string.includes(x));
// };
// console.log(isPanagram("pants"));

// multiplicative persistence
/*
    999 => 9*9*9 =>
*/
function persistence(n) {
  let num = String(n),
    count = 0;

  const checkLength = (num) => num.length;

  function calc(num) {
    num = String(num.split("").reduce((a, b) => a * b));

    checkLength(num) > 1 ? (num = calc(num)) : 0;

    count++;

    return num;
  }

  checkLength(num) !== 1 ? calc(num) : 0;

  return count;
}
// console.log(persistence(0)); // 0

// filter elements from arr1 that are not in arr2
function arrayDiff(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}

// console.log(arrayDiff([1, 2, 2, 2, 5, 2, 2, 3, 3], [1, 2]));

// break string at camel case
function solution(str) {
  return str.split(/(?=[A-Z])/).join(" ");
}

// console.log(solution("camelCasingThisString"));

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

function findNeedle(arr) {
  return `found the needle at position ${arr.indexOf("needle")}`;
}

// console.log(
//   findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
// );

/*
    function nb_year should return n number of entire years needed to get a population greater or equal to p

    function params:
    p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

    p0 => chartting population
    percent = > percentage increase per year
    aug => increase per year from newcomers
    p => population to surpass

    At the end of the first year there will be: 
      1000 + 1000 * 0.02 + 50 => 1070 inhabitants

      At the end of the 2nd year there will be: 
      1070 + 1070 * 0.02 + 50 => 1141 inhabitants 

      At the end of the 3rd year there will be:
      1141 + 1141 * 0.02 + 50 => 1213

       population is p0 = 1000 at the beginning of a year.
       increases by 2 percent per year
       50 new inhabitants per year
*/

// return No. of years to reach population `p`
function nbYear(p0, percent, aug, p) {
  let n = 0; // number of years

  function calc() {
    // add a years growth. `~~` returns our number without decimals
    p0 += ~~(p0 * (percent / 100) + aug);
    console.log(p0);
    n++;
    if (p0 < p) calc();
  }

  calc();
  return n;
}

// console.log(nbYear(1500000, 0.25, 1000, 2000000)); // => 94

/*
    Given the triangle of consecutive odd numbers:

    We can see that the sum of each row is equal to the row number to the power 3
                  1 =>            row No.1 = 1^3 = 1
              3     5 =>          row No.2 = 2^3 = 8
          7     9    11 =>        row No.3 = 3^3 = 27
      13    15    17    19 =>     row No.4 4^3 = 64
    21    23    25    27    29 => row No.5 = 5^3 = 125
    ...etc.
  

    Calculate the sum of the numbers in the nth row of this triangle (charting at index 1)
*/

function rowSumOddNumbers(n) {
  return n ** 3;
}

// console.log(rowSumOddNumbers(6));

// DNA to RNA
function DNAtoRNA(str) {
  return str
    .split("")
    .map((el) => (el === "T" ? "U" : el))
    .join("");
}

// console.log(DNAtoRNA("GCAT"));

/*
  Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(str) {
  return String(
    Array.from(str)
      .map((a) => (a < 5 ? 0 : 1))
      .join("")
  );
}
// console.log(fakeBin("366058562030849490134388085"));

// average the sum of a list of numbers
function findAverage(list) {
  return list[0] === undefined ? 0 : list.reduce((a, b) => a + b) / list.length;
}

// console.log(findAverage([1, 2, 3, 4])); // 10/4

// return "In Love" or `true` if one number is odd & one number is even
function lovefunc(a, b) {
  return a % 2 != b % 2;
}

// console.log(lovefunc(1, 8));
/*
// Given a set of numbers, return the additive inverse of each. Each 
   positive becomes negatives, and the negatives become positives.

  invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
  invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
  invert([]) == []
  */
function invert(arr) {
  return arr.map((a) => a * -1);
}

// console.log(invert([1, -2, 3, -4, 5]));
/*
  Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/
function isTriangle(a, b, c) {
  // create array containing arguments, just for readability's sake
  // i.e.  we don't have to use `Array.from([...arguments]).reduce(...)`
  const arr = [...arguments];
  const largest = Math.max(...arr);

  // sum of arguments - largest argument is bigger than largest Argument?
  // sum of two should be greater than largest to create a triangle
  return arr.reduce((a, b) => a + b) - largest > largest ? true : false;
}

// console.log(isTriangle(7, 2, 2));
/*
  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

  uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
  uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
  uniqueInOrder([1,2,2,3,3])       == [1,2,3]
  */
function uniqueInOrder(list) {
  return Array.from(list).filter((item, index) => item !== list[index + 1]);
}

// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// Given an array of integers, return a new array with each value doubled.
function maps(x) {
  return x.map((e) => e * 2);
}

// console.log(maps([1, 2, 3]));

// given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// "turns out random test cases are easier than writing out basic ones"
// function findShort(s) {
//   arr = s.split(" ");

//   const wordLengths = [];

//   arr.forEach((e) => {
//     wordLengths.push(e.length);
//   });

//   return Math.min(...wordLengths);
// }

// this one's a bit heavy on puting power!S
function findShort(s) {
  return Math.min(...s.split(" ").map((x) => x.length));
}
// returns: 2

// console.log(findShort("an undocumented feature"));

//  body mass index (bmi = weight / height^2).
/*
  if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  const val = weight / height ** 2;
  return val <= 18.5
    ? "underweight"
    : val <= 25
    ? "Normal"
    : val <= 30
    ? "Overweight"
    : val > 30
    ? "Obese"
    : "unkown";
}
// console.log(bmi(65, 1.6));

// sort int's into descending order
function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// console.log(descendingOrder(1234115));

// name begins with r or R
function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toUpperCase() == "R" ? " plays banjo" : " does not play banjo")
  );
}

// console.log(areYouPlayingBanjo("pobert"));

// 2 bullets to kill a dragon
function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}

// console.log(hero(10, 5));

// 0.5 L/Hr how many litres?
function litres(time) {
  return Math.floor(time * 0.5);
}

// console.log(litres(5));

// repeat string `n` times
function repeatStr(n, s) {
  let res = "";
  for (; n > 0; n--) {
    res += s;
  }

  return res;
}

// console.log(repeatStr(5, "Arse"));

// remove first and last letters from string
function removeChar(str) {
  return str
    .split("")
    .splice(1, str.length - 2)
    .join("");
}

// console.log(removeChar("arse"));

// sum all positive numbers
// if empty array return 0
function positiveSum(arr) {
  // if `n` 0 or `null` add `n` to `tot` else add 0

  return arr.reduce((tot, n) => tot + (n >= 0 || n === undefined ? n : 0), 0);
}

// console.log(positiveSum(["A", -4, 7, 12]));

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// const arse = new SmallestIntegerFinder();
// console.log(arse.findSmallestInt([34, -345, -1, 100]));

// sum two numbers and return the binary of the sum
function addBinary(a, b) {
  // console.log((a + b).toString(2));
  return (a + b).toString(2);
}

// console.log(addBinary(5, 9));

/*
  square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
*/
function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((el) => el ** 2)
      .join("")
  );
}

// console.log(squareDigits(9119));

//"double  numSpaces"
function reverseWords(str) {
  return str
    .split(" ")
    .map((el) => {
      return el.split("").reverse().join("");
    })
    .join(" ");
}

// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

// sum of vals in array is even?
// empty array is even
function oddOrEven(array) {
  return array.reduce((tot, n) => tot + n, 0) % 2 === 0 ? "even" : "odd";
}

// console.log(oddOrEven([0, -1, -5]));

// function solution(str, ending) {
//   console.log(ending.length);
//   return -ending.length === -0 ? true : str.slice(-ending.length) === ending;
// }

// console.log(solution("abcde", ""));
/*
  For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2=9.
  */
function squareSum(numbers) {
  return numbers.reduce((total, num) => total + num ** 2, 0);
}

// console.log(squareSum([])); // 0

// Sum all the integers between and including a & b
function getSum(a, b) {
  // calc min & max then find the number of terms which
  // is found by max - min + 1
  let NumOfTerms = Math.max(a, b) - Math.min(a, b) + 1;

  // multiply the sum of min & max values by the number of terms then divide by two
  return (NumOfTerms * (a + b)) / 2;
}

// console.log(-3 + -2 + -1 + 0 + 1);
// console.log(getSum(-1, 2));

// filter all strings of a length of 4 & put them in an
// array in the same order as they appeared in the original
function friend(friends) {
  let output = friends.filter((i) => i.length === 4);
  return output;
}

// friend([
//   "Jimm",
//   "Cari",
//   "aret",
//   "truehdnviegkwgvke",
//   "sixtyiscooooool",
//   "Arse",
// ]);

/* 
 Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
 
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
 */

function openOrSenior(data) {
  const arr = [];
  // categorize players ([age, handicap]) by iterating over `data`
  //   chacking if age & handicap meet the criteria for `Senior`
  data.forEach((el) => {
    el[0] > 54 && el[1] > 7 ? arr.push("Senior") : arr.push("Open");
  });

  return arr;
}

// console.log(
//   openOrSenior([
//     [18, 20],
//     [45, 2],
//     [61, 12],
//     [37, 6],
//     [21, 21],
//     [78, 9],
//   ])
// );

// number to string
function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}

// console.log(numberToString(123));

/*
    Write a function to convert a name into initials. This function strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

function abbrevName(name) {
  // separate words into an array in uppercase letters
  arr = name.toUpperCase().split(" ");

  //   return the first character of each word with a '.' between them
  return `${arr[0].charAt(0)}.${arr[1].charAt(0)}`;
}

// console.log(abbrevName("Arse hole"));

// Given a random non-negative number, you have to return the digits of
// this number within an array in reverse order.
/*  35231 => [1,3,2,5,3]
    0 => [0]
*/
function digitize(n) {
  // extract each digit into an array & reverse the array
  arr = n.toString().split("").reverse();

  // iterate over each element in the array
  for (let i = 0; i < arr.length; i++) {
    // turn each element into an integer
    arr[i] = parseInt(arr[i]);
  }

  return arr;
}

// console.log(digitize(35231));

function makeNegative1(num) {
  return num < 0 ? num : -num;
}
// console.log(makeNegative1(0));

function makeNegative(num) {
  return num <= 0 ? num : -num;
}

// console.log(makeNegative(-0.5));

function boolToWord(bool) {
  //...
  if (bool === true) return "Yes";
  if (bool === false) return "No";

  return "I only take `true` or `false`";
}

// console.log(boolToWord("arse"));

// calculate x team score
function points(games) {
  let score = 0;
  for (let i = 0; i <= games.length - 1; i++) {
    let scores = games[i].split(":");
    scores[0] > scores[1] ? (score += 3) : 0;
    scores[0] < scores[1] ? (score += 0) : 0;
    scores[0] == scores[1] ? (score += 1) : 0;
  }
  return score;
}

/*

    if x > y: 3 points (win)
    if x < y: 0 points (loss)
    if x = y: 1 point (tie)
*/

// points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]);

// great the boss or guest?
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// greet("Dave", "Dave");

function booleanToString(b) {
  return b.toString();
}

// booleanToString(true);

// array of words to sentence
function smash(words) {
  return words.join(" ").trim();
}

// smash(["hello", "world", "this", "is", "great", " "]);

// what century is it?
function century(y) {
  // return the highest integer
  return Math.ceil(y / 100);
}

// reverse a string
// function solution(str) {
//   let arr = [];
//   // chart at the last letter of the string and count backwards
//   for (let i = str.length - 1; i >= 0; i--) {
//     //push the current letter to the end of the array
//     arr.push(str[i]);
//   }

//   // join all elements of the array into a string
//   return arr.join("");
// }

// solution("arse");
