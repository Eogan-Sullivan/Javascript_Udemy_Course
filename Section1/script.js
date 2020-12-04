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
*/

const now = 2037;
const ageEogan = now - 1993;
const ageSarah = now - 2018;

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x=10,y=10
console.log(x, y);

const averageAge = (ageEogan + ageSarah) / 2;
console.log(ageEogan, ageSarah, averageAge);