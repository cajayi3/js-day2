//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(key in person3) {
    if(person3.hasOwnProperty(key)) {
        var value = person3[key];
    }
}

console.log(value)
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    }

Person.prototype.nationality = "Spanish";
// Use an arrow to create the printInfo method
const Person = (firstname, lastname) => {
    return `Hi ${firstname}, ${lastname}`;
  }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
const Years = (age) => {
    return `I am ${age} years old`;
}

const Person1 = new Person('Sandra', 'Hernandez', 23)
const Person2 = new Person('Aaron', 'Diaz', 25)

let a = 3;
const age = ++a;

console.log(Person1);
console.log(`b:${b}, Person2:${Person2}`);
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function myDisplayer(some) {
    document.getElementById("lancaster").innerHTML = some;
  }
  
  let Num = new Promise(function() {
    let len = 6;

    if (len > 10) {
      console.log("Big word");
    if (len < 10)
      console.log("Small Number");
    }
  });
  Num.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );


//-------------------

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(num) {
    if(num % 2 === 0){
      return 'Even';
    } else {
      return 'Odd';
    }
};


//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
    if (num > 0){
      return num * -1
    } else {
      return num;
    }
  };






