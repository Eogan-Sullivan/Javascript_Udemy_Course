'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

//const interface = 'Audio';
// const private = 534;


function logger(){
    console.log(`My name is Eógan`);
} 

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor (apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

let appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);


//function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

console.log(calcAge1(1993));

//function expression
const calcAge2 = function (birthYear){
    return 2037  -birthYear;
}

const age2 = calcAge2(1993);
console.log(age2);
*/


//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement =  (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1993, 'Eógan'));
console.log(yearsUntilRetirement(1980, 'Bob'));