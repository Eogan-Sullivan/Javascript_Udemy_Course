'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

//const interface = 'Audio';
// const private = 534;
*/

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