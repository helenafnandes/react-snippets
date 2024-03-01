'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  rName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /**
   * sometimes we have functions with a lot of parameters
   * and it can be hard to know the order of the parameters.
   * so instead of defing the parameters manually, we can
   * pass an object into the function as an argument and the
   * function will immediately destructure that object.
   */
  exampleMethod: function(obj) {
    console.log(obj);
  },

  orderDelivery: function({starterIndex = 1, mainMenuIndex, address = 'default address', time}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}.`);
  },

  // spread operator
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your pasta made with ${ing1}, ${ing2} and ${ing3}`)
  }
};

// the names of the properties have to match, but not the order
restaurant.orderDelivery({
  time: '22:30',
  address: 'Punk Hazard',
  mainMenuIndex: 2,
  starterIndex: 2
})






// Destructuring objects ////////////////////////////////////////////////////////////////////

// the order in object dont matter
// the name of the variables must be the exact same as the properties
const {categories} = restaurant;
const {openingHours, rName} = restaurant;
console.log(openingHours, rName);                 // {thu: {…}, fri: {…}, sat: {…}} 'Classico Italiano'

// variables with names that are not the same as the properties'
// const {originalName: newName}
const {rName: restaurantName, openingHours: hours} = restaurant;
console.log(hours, restaurantName);               // {thu: {…}, fri: {…}, sat: {…}} 'Classico Italiano'

// default values for properties that might not exist
const {menu = [], starterMenu = []} = restaurant;
console.log(menu, starterMenu);                   // [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// using both together works
// const {menu = [], starterMenu: starters = []}


// Mutating variables
let g = 111;
let h = 999;
const obj = { g: 13, h: 25, i: 42};
const obj2 = { a: 13, b: 25, c: 42};

({g, h} = obj);
console.log(g, h);                                // 13, 25
({g, h} = obj2);
console.log(g, h);                                // undefined undefined


// Nested objects
const { fri: {open, close} } = openingHours;
//console.log(fri);                                 // ReferenceError: fri is not defined
console.log(open, close);                         // 11 23



// Destructuring arrays //////////////////////////////////////////////////////////////////////
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(a, x);                                // 2 2

// ---

let [first, second] = restaurant.categories;
console.log(first, second);                       // Italian, Pizzeria
[first, , second] = restaurant.categories;
console.log(first, second);                       // Italian, Vegetarian

// switch the main and second categories without a temp variable
let [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main]; // [secondary, main] -> array with the categories


// Receive 2 return values from a function
console.log(restaurant.order(2, 0));              // garlic bread, pizza

const [starterDish, mainCourse] = restaurant.order(2, 0);
console.log(mainCourse);                          // Pizza

// get elements from nested arrays
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);                                // 2, [5, 6]
const [k,  ,[l, m]] = nested;
console.log(k, l, m);                             // 2, 5, 6

// Setting default values
const [p, q, r] = [8 , 9];
console.log(p, q,r);                              // 8 9 undefined
const [d = 1, e = 1, f = 1] = [8, 9];
console.log(d, e, f);                             // 8 9 1


/////////////////////////////////////////////////////////////////////////////////////////////

/**
 * the spread operator expands the array into all its elements separated by commas.
 * it works on all iterables (arrays, strings, maps, sets). also works on objects since 2018.
 * used when you'd use element separated by commas.
 * 
 * some use cases:
 * - create shallow copies of arrays
 * - merge arrays
 */
// 

const arr1 = [7, 8, 9];
console.log(arr1);                                        // (3) [7, 8, 9]
console.log(...arr1);                                     // 7 8 9

const badNewArr1 = [1, 2, arr1[0], arr1[1], arr1[2]];     // [1, 2, 7, 8, 9]
const badNewArr2 = [1, 2];
arr1.forEach(el => {
  badNewArr2.push(el);
});                                                       // [1, 2, 7, 8, 9]

const goodNewArr = [1, 2, ...arr1];                       // [1, 2, 7, 8, 9]
console.log(...arr1);


const newMenu = [...restaurant.mainMenu, 'Gnocci'];       // original manu + gnocci

const newRestaurant = {...restaurant, founder: 'Robin'}   // original restaurant + founder

const str = 'Robin';
const letters = [...str];
console.log(letters);                                     // ['R', 'o', 'b', 'i', 'n']


// const ingredients = [
//   prompt('Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ]
const pastaIngredients = ['mushrooms', 'chicken', 'green onion'];
restaurant.orderPasta(...pastaIngredients);
