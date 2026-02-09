// array [ ] indexing 0

let array = ["basit", "Fardeen"]
let number = [1,2,3,4,4] // 0 = 1, 1= 2, 3=4

console.log(number);
console.log(number.length);

combineArray  = ["shehriyar", 22, true, {},[]] 

// concat():
let web_Students = ["basit", "Fardeen"]
let new_Students = ["fatima", "Amisha"]
console.log(web_Students);
let finalStudents = web_Students.concat(new_Students)
console.log(finalStudents, "concat method");

// push()

finalStudents.push("Nayyar", "Usman", "Sudais")
console.log(finalStudents, "push method");

// pop()
finalStudents.pop()
console.log(finalStudents, "pop method");

// shift()

finalStudents.shift()
console.log(finalStudents, "shift method");

// indexOf()
let indexOfExample = finalStudents.indexOf("Nayyar")
let indexOfExample2 = finalStudents.indexOf("basit")
console.log(indexOfExample, "indexof method");
console.log(indexOfExample2, "indexof method");

//  unshift() 
finalStudents.unshift("Basit", "Hasnat")
console.log(finalStudents, "unshift method");