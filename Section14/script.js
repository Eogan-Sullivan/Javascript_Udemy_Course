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

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;
console.log(mike.__proto__);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //always happens first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");

martha.introduce();
martha.calcAge();

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

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();
*/

//Public fields
//Private fields
//Public methods
// private methods
class Account {
  //Public fields (instances)
  locale = navigator.language;

  //private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property
    // this.#movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }

  //Private Methods
  #approveLoan(val) {
    return true;
  }
}
const acc1 = new Account("Jonas", "EUR", 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
//acc1._approveLoan(1000);

console.log(acc1.getMovements());
console.log(acc1);
// console.log(acc1.#approveLoan());
// console.log(acc1._pin);

Account.helper();

//Chaining

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());
