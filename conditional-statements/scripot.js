// Conditional statements
// If  
let age = 20; // 20 > 30  = false
if ( age > 30) {
    console.log("you can vote!");
}

// if-else
    
    if (age < 15) {
    console.log("you can vote!");
    
} else {
    console.log("you cannot vote!");
    
}


// Else if

let  coldDrink  = "pepsi";

if (coldDrink == "sprite") {
    console.log("bring sprite!");
    
    
} else if(coldDrink == "fanta"){
    
    console.log("bring pepsi!");
    
} 

else {
    console.log("jo b hai ly awo ");
    
}

// Switch 

switch (coldDrink) {
    case "pepsi":
        console.log("bring sprite!");
        
        break;
         case "fanta":
        console.log("bring fanta!");
        break;
    case "pepsi":
        console.log("bring pepsi");
        
    default:
        console.log("jo b hai ly awo ");
}