 

// 1. Write a program using an arrow function to multiply two numbers. 
//    Pass this function as a callback to another function 
const multiply = (a, b) => a * b;
const calculate = (num1, num2, callback) => {
    return callback(num1, num2);
};
const result = calculate(5, 4, multiply);
console.log(result);

/*
2. Write a program to simulate a weather app that checks the temperature and provides weather updates. 
Your program should demonstrate the differences between global, function, and block scope using the 
following requirements: 

A. Declare a global variable globalTemperature to store the current temperature in Celsius.
   This variable should be accessible everywhere in the program. 

B. Create a function scopecheckWeather() that declares a variable weatherCondition
   (e.g., "Sunny", "Rainy", "Cloudy"). his variable should be accessible only inside the function. 

C. Inside the checkWeather() function, use an if-else block to check the value of globalTemperature.
   Declare a block-scoped variable message inside the if-else block to provide a weather update
   (e.g., "It's a warm day!", "It's cold outside!"). This variable should be accessible only inside the block.
*/

let globalTemperature = 22;  // Global variable

function checkWeather() {  // Function scope
    let weatherCondition;

    function weatherMessageBlock() {   // Block scope
        if (globalTemperature >= 30) {
            weatherCondition = "Sunny";
            let message = "It's a hot and sunny day!";
            console.log(weatherCondition, message);
        } else if (globalTemperature >= 20) {
            weatherCondition = "Cloudy";
            let message = "It's a warm but cloudy day!";
            console.log(weatherCondition, message);
        } else {
            weatherCondition = "Rainy";
            let message = "It's cold and rainy outside!";
            console.log(weatherCondition, message);
        }
    }

    weatherMessageBlock();
}

checkWeather();


/* 
3: Write a complete program that: 
a. Creates an object book with properties title, author, and pages. 
b. Adds a method summary using this to return a string like: 
   "The book [title] by [author] has [pages] pages.". 
c. Calls the summary method and prints the result.
*/

// a. Create an object 'book' with properties
const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208,

  // b. Add a method 'summary' that uses 'this' to return a string
  summary: function() {
    return `The book "${this.title}" by ${this.author} has ${this.pages} pages.`;
  }
};

// c. Call the summary method and print the result
console.log(book.summary());
