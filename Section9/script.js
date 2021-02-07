'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //openingHours:openingHours,
  //es6 enhanaced Object Literals
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

const properties = Object.keys(hours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

const values = Object.values(hours);
console.log(values);

// Entire Object
const entries = Object.entries(hours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
//Without Optional Chaining
if (restaurant.hours && restaurant.hours.mon)
  console.log(restaurant.hours.mon.open);

//WITH Optional Chainging
console.log(restaurant.hours.mon?.open);
console.log(restaurant.hours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [
  {
    name: 'Eogan',
    email: 'hello@eogan.io',
  },
];
console.log(users[0]?.name ?? 'User array empty');

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  //without destructuring
  //console.log(`${item[0] + 1}: ${item[1]}`);
  //with destructuring
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]);

/*
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (Not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*Array
console.log('-----OR-----');
// Use ANY data type, return ANY Data Type, short circuiting
//if the first operand is truthy it will return it
console.log(3 || 'Eógan');
console.log('' || 'Eógan');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//Will not work when numGuests = 0, wil return 10 even if there are actually 0 guests
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----AND-----');
//if the first operand is falsey it will return it
console.log(0 && 'Eógan');
console.log(7 && 'Eógan');

console.log('Hello' && 23 && null && 'Eógan' && 0);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
/*
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
//Destructuring

//Spread because on right side of assignment operator
const arr = [1, 2, ...[3, 4]];

//REST Syntax because on left side of the operators
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
/*


const ingredients = [
  // prompt("Let's make pasta! Ingredient1?"),
  // prompt("Let's make pasta! Ingredient2?"),
  // prompt("Let's make pasta! Ingredient3?"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

//Since es2018 spread operator works on Objects even though they are not literals
const newRestaurant = { foundedIn: '1991', ...restaurant, founder: 'Luigi' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name, restaurant.name);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// spread operator array
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy Array - shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2+ Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables arrays,strings,maps,sets but not objects
const str = 'eogan';
const letters = [...str, ' ', 's'];
console.log(letters);
console.log(...str);

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via de Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via de Sole, 21',
  starterIndex: 1,
});

//Object Destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
/*
//array destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

//switching variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

//Recieve 2 rfeturn values from a function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
