"use strict";
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

//class expression
//const Personcl = class{}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exisits (this._)
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert: `${name} is not a fullname`;
  }

  get fullName() {
    return this._fullName;
  }

  //static method
  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();
console.log(jessica.age);

// Classes are not hoisted/
// Classes are firstclass citizens
// Classes are executed in strict mode

const account = {
  owner: "jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

const walter = new PersonCl("Walter White", 1965);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();
*/
//Coding  Challenge 2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
