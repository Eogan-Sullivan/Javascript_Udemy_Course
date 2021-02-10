'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LM123');
createBooking('LM123', 2, 800);
createBooking('LM123', 2);
createBooking('LM123', 5);

createBooking('LM123', undefined, 1000);

const flight = 'LM234';
const eogan = {
  name: 'Eogan Sullivan',
  passport: 234345134,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LM999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 234345134) {
    alert('Check In');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight, eogan);
// console.log(flight);
// console.log(eogan);

// const flightNum = flight;
// const passenger = eogan;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(eogan);
checkIn(flight, eogan);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Eogan', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Eogan');
greeterHey('Stephen');

greet('Hello')('Eogan2');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Eógan');
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Eógan Sullivan');
lufthansa.book(635, 'Mike Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does not work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

const flightData = [583, 'Geogre Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
