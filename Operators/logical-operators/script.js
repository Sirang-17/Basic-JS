console.log("Question 1");
let a = true;
let b = false;
console.log(a && b);

console.log("Question 2");
let x = false;
let y = true;
console.log(x || y);

console.log("Question 3");
let isOnline = false;
console.log(!isOnline);

console.log("Question 4");
let loggedIn = true;
let banned = true;
console.log(loggedIn && !banned);

console.log("Question 5");
let isAdmin = false;
let isGuest = true;
console.log(isAdmin || !isGuest);

console.log("Question 6");
let age = 20;
let hasID = true;
console.log(age >= 18 && hasID);

console.log("Question 7");
let p = false;
let q = true;
let r = false;
console.log(p || (q && r));

console.log("Question 8");
let userLoggedIn = true;
let adminUser = false;
let userBanned = false;
console.log(userLoggedIn && (adminUser || !userBanned));

console.log("Question 9");
let value = false;
console.log(value && "Hello");

console.log("Question 10");
let flag = true;
console.log(flag || "World");
