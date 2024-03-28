// Create a function named 'logNameAndAge' and pass name and age as params and log them inside the function so that the following code should work

function logNameAndAge(name, age) {
  console.log("Name ", name);
  console.log("Age ", age);
}

logNameAndAge("John", 33);

// Create a function to add, subtract, divide, multiply 2 numbers based on the numbers and the operation passed as the parameter
// the following code should work afterwards

function calculate(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operation";
  }
}
console.log(calculate(1, 2, "+"));
console.log(calculate(5, 9, "*"));
console.log(calculate(22, 8, "-"));
console.log(calculate(17, 3, "/"));

// Write what will happen in the after running the following code and also explain why.

/*
someFunction();
anotherFunction();

const someFunction = function () {
  console.log('Function was called!')
}

function anotherFunction() {
  console.log('another function was called!')
}
*/
// Answer:
someFunction();
// in this it is giving the reference error as its not defined but called
// because
anotherFunction();
// this code will execute

const someFunction = function () {
  console.log("Function was called!");
};
// in this someFunction is declared through function expression but not hoisted the same way as function declaration of the code

function anotherFunction() {
  console.log("another function was called!");
}
// in this anotherfunction is declared through function declaration and hoisted at top of the code
