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
*/
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
