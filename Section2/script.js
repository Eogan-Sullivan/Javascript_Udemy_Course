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

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece apples and ${orangePieces} pieces orange`
    return juice
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;

    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1993, 'Eógan'));
console.log(yearsUntilRetirement(1970, 'Mike'));

const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

//const years = new Array(1992, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length)
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Eógan';
const eogan = [firstName, 'Sullivan', 2037 - 1993, 'Student', friends];
console.log(eogan);
console.log(eogan.length);

// Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])];

console.log(ages);


const friends = ['Micheal', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.unshift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friends named Steven');
}
*/
const eoganArray = [
    'Eogan',
    'Sullivan',
    2037 - 1993,
    'student',
    ['Micheal', 'Peter', 'Steven']
]

const eogan = {
    firstName: 'Eógan',
    lastName: 'Sullivan',
    age: 2037 - 1993,
    job: 'Student',
    friends: ['Micheal', 'Peter', 'Steven']
};

console.log(eogan);

console.log(eogan.lastName);
console.log(eogan['lastName,me']);

const nameKey = 'Name';
console.log(eogan['first' + nameKey]);
console.log(eogan['last' + nameKey]);

// console.log(eogan.'last'+namKey)

const interestedIn = prompt('What do you want to know about Eogan? Choose between firstName, lastName, age, job and friends');

console.log(eogan[interestedIn]);

if (eogan[interestedIn]) {
    console.log(eogan[interestedIn]);
} else {
    console.log('wrong request! Choose between firstName, lastName, age, job and friends');
}

eogan.location = 'Portugal';
eogan['twitter'] = '@SullivanEogan'
console.log(eogan);

// Challenge
//"Jonas has 3 friends, and his best friend is called Micheal"

console.log(`${eogan.firstName} has ${eogan.friends.length} friends and his best friend is called ${eogan.friends[0]}`);