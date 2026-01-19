// 1.	Write a program using arithmetic operators to 
// find the multiplication of two numbers price = 50 and quantity = 2 .
let price = 50;
let quantity = 2;
let total = price * quantity;
console.log(total);


// 2.	Write a program using assignment operators to decrease the value of money = 100 by 20.
let money = 100;
money -= 20;  // MONEY  = MONEY - 20
console.log(money);


// 3. Write a program using comparison operators to check whether marks = 30 is less than 40.
let marks = 30;

if (marks < 40) {
  console.log("YOU ARE FAIL");
}

// 4.Write a program using logical operators to check if isMorning = true AND isWeekend = true and print "Good morning"
let isMorning = true;
let isWeekend = true;

if (isMorning && isWeekend) {
  console.log("Good morning");
}

// 5.Write a program using logical operators to check if isDoorOpen = false and print "Close the door" using NOT operator.
let isDoorOpen = false;

if (!isDoorOpen) {
  console.log("Close the door");
}

// 6.Write a program using increment operator to print the value of count = 3 and then increase it by 1.
let count = 3;
console.log(count);
count++;
console.log(count);

// 7.	Write a program using if statement to check if number = 10 is greater than 5.
let number = 10;

if (number > 5) {
  console.log("Number is greater than 5");
}

// 8.	Write a program using if else statement to check if temperature = 30 is hot or cold.
let temperature = 30;
if (temperature > 25) {
  console.log("It's hot");
} else {
  console.log("It's cold");
}

// 9.	Write a program using else if statement to check traffic light color signal = "green", "yellow", or "red" and print the action
let signal = "green";
if (signal === "green") {
  console.log("Go");
} else if (signal === "yellow") {
  console.log("Slow down");
} else if (signal === "red") {
  console.log("Stop");
} else {
  console.log("Invalid signal");
}

// 10.	Write a program using switch statement to check a simple calculator operation for operator = "+".
let operator = "+";
let num1 = 5;
let num2 = 3;
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operator");
}

console.log(result);

// 11.	Write a program using conditional (ternary) operator to check if isLoggedIn = true and print "Welcome" or "Please login".
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome" : "Please login";
console.log(message);

// 12.	Write a program using for loop to print "Hello" 3 times.
for (let i = 0; i < 3; i++) {
  console.log("Hello");
}

// 13.	Write a program using while loop to print the table of 5.
let k = 1;
while (k <= 10) {
  console.log(5 * k);
  k++;
}

// 14.	Write a program using do while loop to print "Welcome" at least once.
let j = 1;

do {
  console.log("Welcome");
  j++;
} while (j <= 0);

// 15.	Write a program using function declaration to find the square of a number.
function findSquare(num) {
  return num * num;
}

let numberr = 5;
console.log("Square of the number is:", findSquare(numberr));

// 16.	Write a program using function expression to print "Welcome".
let welcomeMessage = function() {
  console.log("Welcome");
};

welcomeMessage();

// 17.	Write a program using function parameters and arguments to find the product of two numbers.
function findProduct(a, b) {
  return a * b;
}
let prod = findProduct(4, 5);
console.log("Product of the numbers is:", prod);

// 18.	Write a program using return statement to return the square of a number.
function square(num) {
  return num * num;
}
let sq = square(6);
console.log("Square of the number is:", sq);