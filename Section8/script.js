'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating New variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'New Output';

      const str = `Oh and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    //console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Eogan';
calcAge(1993);

//hoisting with variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Eógan';
let job = 'Dev';
const year = 1993;

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow);
//console.log(addArrow(2, 3));

//hoisting with functions
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);
*/

console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1993);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1993);

const eogan = {
  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

eogan.calcAge();

const gillian = {
  year: 2017,
};

gillian.calcAge = eogan.calcAge;
gillian.calcAge();

const f = eogan.calcAge;
f();
