'use strict';
/*
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

//Object.prototype top of the prototype chain
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3,4,5,6,7,9,3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === new Array);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(h1);

console.dir(x => x+1);

// coding challenge
const Car = function(make,speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(this.speed);
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(this.speed);
}

const bmw = new Car('BMW', 120);
const merc = new Car('Mercedes', 95);

bmw.accelerate();
merc.accelerate()
bmw.brake();
merc.brake();
*/

//class expression
//const Personcl = class{}

//class declaration
class PersonCl{
constructor(firstName, birthYear){
this.firstName = firstName;
this.birthYear = birthYear;
}

calcAge(){
    console.log(2037 -this.birthYear);
}
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica)
jessica.calcAge();

PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`);
}

jessica.greet();

// Classes are not hoisted/
// Classes are firstclass citizens
// Classes are executed in strict mode

