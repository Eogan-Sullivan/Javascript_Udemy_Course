/* First few lectures
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob)

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// Var, let and const
let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';

lastName = 'Sullivan';
console.log(lastName);


//Basic Operators
const now = 2037;
const ageEogan = now - 1993;
const ageSarah = now - 2020;
console.log(ageEogan, ageSarah);

console.log(ageEogan * 2, ageEogan / 10, 2 ** 3);
// 2 ** 3 means 2 cubed

const firstName = 'Eógan';
const lastName = 'Sullivan';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x+10 = 25
x *= 4; // x= x*4 or 100
x++; // x= x+1;
x--; // x= x-1;
console.log(x);

// Comparison operators
console.log(ageEogan > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;


console.log(now - 1991 > now - 2018);


const now = 2037;
const ageEogan = now - 1993;
const ageSarah = now - 2018;

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x=10,y=10
console.log(x, y);

const averageAge = (ageEogan + ageSarah) / 2;
console.log(ageEogan, ageSarah, averageAge);

const firstName = 'Eogan';
const job = 'Project Manager';
const birthYear = 1993;
const year = 2020;

const eogan = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(eogan);

const eoganNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(eoganNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving 🚗`);
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😊`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);

const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18);

console.log(Number("Eogan")); // Returns NaN "Not a Number"
console.log(typeof (NaN));

console.log(String(99), 99);

//type coercion
console.log('I am' + 26 + 'years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1; // String 11
n = n - 1;
console.log(n);

// 5 Falsy Values 0,'', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Eogan'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Dont spend it all!");
}
else {
    console.log("You should get a job!");
}

let height = 123;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Heigh is Undefined');
}


const age = '18';
// === Strict == Loose, strict does not do type coersion, loose does.
if (age === 18) console.log("You just became an adult! (strict)");

if (age == 18) console.log("You just became an adult! (loose)");

const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) {
    console.log(`Cool 23 is an amazing number`);
} else if (favourite === 7) {
    console.log(`7 is also a cool number`);
} else if (favourite === 9) {
    console.log(`9 is also a cool number`);
}
else {
    console.log(`Number is not 7,9 or 23`);
}

//!== strict != loose
if (favourite !== 23) {
    console.log(`why not 23?`)
}

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive");
// }
// else {
//     console.log("Someone else should drive")
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
}
else {
    console.log("Someone else should drive...")
}

const day = 'thursday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theroy videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a Valid Day');
}
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}
else if (day === 'tuesday') console.log('Prepare theroy videos');
else if (day === 'wednesday' || day === 'thursday') console.log('Write code examples');
else if (day === 'friday') console.log('Record videos');
else if (day === 'saturday' || day === 'sunday') console.log('Enjoy the weekend :D');
else console.log('Not a Valid Day');
*/

const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧💧';
console.log(drink);

let drink2;
if (age >= 18) drink2 = 'wine 🍷';
else drink2 = 'water 💧💧';
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧💧'}`);

