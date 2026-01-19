// global scope

var name = "Nayyar"

console.log(name);

function myName() {
    console.log(name);

}
myName()


// function scope


function functionScope() {
    let welcomeMessage = "hello function scope!!"
    console.log(welcomeMessage, name);

}
functionScope()
// console.log(welcomeMessage);

// block scope  {} let const

function blockScope() {
    let scope = "block scope!!"
    console.log(scope)

    if (true) {
        const num = 30
        console.log(scope, 30)
    }
    // console.log(num);



}

blockScope()