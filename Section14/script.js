'use strict';

const Person = function (firstName, birthYear){
 this.firstName = firstName;
 this.birthYear = birthYear;

 // Never do this
//  this.calcAge = function(){
//      console.log(2037 - this.birthYear);
//  }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// New Empty object
// Function is called, this = ();
// () linked to prototype
// function automatically return ()

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log( jonas instanceof Person);

// Prototypes
Person.prototype.calcAge = function (){
    console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('species'));