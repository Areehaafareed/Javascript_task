// Take age as input from the user and alert 'allow' or 'deny' based on the conditions
// - the user's age is greater than or equal to 18 years (allowed)
// - the user's age is less than 18 (denied)

// const age = parseInt(prompt("enter you age "));

// if (age >= 18) {
//   alert("allowed");
// } else {
//   alert("denied");
// }

// Take a number input from the user and alert the message based on the following conditions
// alert('Condition 1 fulfilled'): if the number is between 2 and 5 inclusive
// alert('Condition 2 fulfilled'): if the number is between 6 and 10 inclusive
// alert ('Condition 2 fulfilled'): if the number is greater than 10
// const inputNum = parseInt(prompt("enter number"));

// if (inputNum >= 2 && inputNum <= 5) {
//   alert("Condition 1 fulfilled");
// } else if (inputNum >= 6 && inputNum <= 10) {
//   alert("Condition 2 fulfilled");
// } else if (inputNum > 10) {
//   alert("Condition 3 fulfilled");
// } else {
//   alert("Invalid input");
// }

// Which opertor is used to check whether a property exists on that object
// Answer:

// check whether the property 'property2' exists on the object
const exampleObject = {
  property1: "value1",
  property3: "value3",
};

// console.log("property2" in exampleObject);

// Comment what will be the result of the following conditional checks
console.log(5 == 8); //false
console.log(undefined == null); //true
console.log(0 == false); // true
console.log("2" != 2); // false
console.log(1 !== true); // true
console.log(undefined != null); // false
console.log("0" != false); // false
console.log(!false); //true
console.log(1 === true); //false
console.log(0 === 0); // true
console.log(1 != true); //false
console.log(0 !== false); //true
console.log(0 != false); //false
console.log("4" == 4); //true
console.log("0" === false); //false
console.log("0" == false); //true
console.log(0 === false); //false
console.log(1 == true); //true
console.log(7 != 7); // false
console.log(!true); //false
console.log(undefined === null); //false
console.log(4 !== 2); //true
console.log("2" === 2); //false;
console.log("2" !== 2); //true
console.log(undefined !== null); //true
console.log("0" !== false); //true

// Take a number input from the user and log the table of that number
function numberTable(table) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${table} * ${i} = ${table * i}`);
  }
}
const table = parseInt(prompt("enter the table number"));
if (!isNaN(table)) {
  numberTable(table);
} else {
  console.log("Invalid input. Please enter a valid number.");
}

// Take 2 numbers as input from the user and alert whether the first number is completely divisible by second or not.
const num1 = parseInt(prompt("enter num1"));
const num2 = parseInt(prompt("enter num2"));
if (num1 % num2 === 0) {
  alert(`${num1} is completely divisible by ${num2}`);
} else {
  alert(`${num1} is not divisible by ${num2}`);
}
