

    // let name = "basit"
    // let lastName = "ali"
    // let age = 19
    // console.log(name);
    // console.log(age);


    let myData =  {
        firstName : "basit",
        lastName : "Ali", 
        age : 19,
        fullname: function() {
           return this.firstName  +  " " + this.lastName
            
        },
        hobbies: {
            playing: "ludo",
            reading: "novel"
        }

    }
    console.log(myData.firstName, myData.age, myData.hobbies);
    console.log(myData.fullname());
    
    
    // Adding
    myData.email = "example@gmail.com"
    
    //  modifying, and deleting properties
    
    myData.age = 20
    
    delete myData.hobbies.playing
    
    console.log(myData);
