let myData = {
    firstName: "Sirang",
    lastName: "Muhammad",
    age: 20,
    address: {
        village: "Passu Gojal Hunza",
        Province: "Gilgit Baltistan",
        country: "Pakistan"
    }, 

    location: function () {
        return this.village + ", " + this.Province + ", " + this.country;
    },
    phoneNumber: "03001234567",
    email: "sirangpassu@gmail.com",
    hobbies: {
        playing: "football",
        musician: "Robab",
    },

}
console.log(myData);
console.log("Name: " + myData.firstName + " " + myData.lastName);
console.log("Age: " + myData.age);
console.log("Address: " + myData.address.village + ", " + myData.address.Province + ", " + myData.address.country);
console.log("Phone Number: " + myData.phoneNumber);
console.log("Email: " + myData.email);
console.log("Hobbies: Playing " + myData.hobbies.playing + ", Musician: " + myData.hobbies.musician);