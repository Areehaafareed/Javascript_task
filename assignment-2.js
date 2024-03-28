// Given 2 strings, create a new string by concatenating the original string using the '+' operator and the concat method
const string1 = "Hello";
const string2 = " World";

const string3 = string1 + string2;
const string4 = string1.concat(string2);
console.log(string3);
console.log(string4);

// Given a string, using loops print each character of the string on a new line
const loopsWithString = "Pakistan";
for (let i = 0; i < loopsWithString.length; i++) {
  console.log(loopsWithString[i]);
}

// How you will get the last character from a string
// let string = 'Hello World'
// Answer:
console.log(string.slice(10));
// What is the equivalent method for the index operator '[]' to get the character of a certain position from a string
// we use charAt() method
const string = "Sara";
console.log(`the character is ${string.charAt(3)}`);

// Given the following string:
let string_1 = "Pakistan";
// How you will get the ascii code of the letter at the index 4
console.log(`the ascii code is ${string_1.charCodeAt(4)}`);

// Given an array of filenames, iterate over the array & print true on the console if the file is a txt file
const files = [
  "document.txt",
  "hello.docx",
  "names.xlsx",
  "profile.txt",
  "sample.ppt",
];
for (let i = 0; i < files.length; i++) {
  if (files[i].endsWith(".txt")) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// Take an string as input from the user and print whether the string contains a vowel or not and also tell at which index the vowel occurs at first

let vowelString = prompt("Enter a string:");
let firstIndex = -1;
let containsVowel = false;

for (let i = 0; i < vowelString.length; i++) {
  let current = vowelString[i].toLowerCase();
  if (
    current === "a" ||
    current === "e" ||
    current === "i" ||
    current === "o" ||
    current === "u"
  ) {
    containsVowel = true;
    firstIndex = i;
    break;
  }
}

if (containsVowel) {
  console.log(
    `The string "${vowelString}" contains a vowel at index ${firstIndex}.`
  );
} else {
  console.log(`The string "${vowelString}" does not contain any vowel.`);
}

// Given an string replace the character 'a' with 'e' and 'll' with 'oo'
const stringToChange = "Hello World as Javascript";
const replacement = stringToChange.replace(/a/g, "e").replace(/ll/g, "oo");
console.log(replacement);

// Given an string like this -> '12:00:00'
// Extract out the hrs, minutes and seconds from it.
let timeString = "13:45:36";
let stringSplit = timeString.split(":");
let hours = stringSplit[0];
let minutes = stringSplit[1];
let seconds = stringSplit[2];
console.log(`hours ${hours}`);
console.log(`minutes ${minutes}`);
console.log(`seconds ${seconds}`);

// Take an string as input from user and also take a number as count and repeat the entered string count times and alert it
// Example:
// Entered string: 'Hello'
// Entered count : 3
// Result        : 'HelloHelloHello'
// Note: Use the builtin method to implement it
let stringName = prompt("enter your name");
let stringCount = parseInt(prompt("enter a count number "));

if (stringCount < 0 || !stringCount) {
  alert("invalid number");
} else {
  let countResult = stringName.repeat(stringCount);
  alert(countResult);
}

// calling through function
function repeatString(name, number) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result += name;
  }
  console.log(result);
}
