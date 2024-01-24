/**
 * Functions!
 */


// ---------- FUNCTION DECLARATION ----------

const age1 = calcAge1(1991); // can be before or after function declarion

// function declaration
function calcAge1(birthYear) {
    // we wont be storing this value, so we can just return it
    return 2023 - birthYear;
}

// ---------- FUNCTION EXPRESSION ----------

// const age2 = calcAge2(1991); // CANT be before declarion

// have to be written before its callings
// functions are values and can be stored in variables
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1991);

// ---------- ARROW FUNCTION ----------
// still are function expressions
// info_it_receives => info_it_gives

// birthYear => 2023 - birthYear
// storing it inside a variable
const calcAge3 = birthYear => 2023 - birthYear;
// because its composed of only one line, it will return the value of that line

const age3 = calcAge3(1991);

// when its composed of more than one line:
const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement
}

// multiple parameters
const printAge = (birthYear, firstName) => {
    console.log(`${firstName} was born in ${birthYear} and is ${2023-birthYear} yo.`);
}

printAge(1991, 'Nicole');



// ----------


console.log(yearsUntilRetirement(1991));
console.log(age1, age2, age3);

// functions ==============================================================

// Function declaration
function calcAge(birthYear) {
	return 2024 - birthYear;
}

// Function value (used as parameter or to be stored in a value)
/*
function() {
	console.log('hi');
}
*/

// Function expression (function value stored in a variable)
const yearsUntilRetirement2 = function (birthYear, firstName) {
	const age = 2024 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years`;
}


// Arrow function
// arrow functions do not have the "this" keyword
const calcAge = birthYear => 2024 - birthYear;

const yearsUntilRetirement3 = (birthYear, firstName) => {
	const age = 2024 - birthYear;
	const retirement = 65 - age;
	if(retirement > 0){
		return `${firstName} retires in ${retirement} years`;
	} else{
		// return -1; //good practice to return stuff with the same type
		return `${firstName} has already retired`
	}

	
}

console.log(calcAge(1991));
console.log(yearsUntilRetirement3(1991, 'Mel')); 

// arrays in js ================================================================

const friends = ['Michael', 'Jena', 'Nicole'];
const friends2 = new Array('Michael', 'Jena', 'Nicole');

const firstName2 = 'Robin';
const robinFriends = ['Luffy', 'Nami', 'Usopp'];
const robin = [firstName2, 'Nico', 2024 - 1991, robinFriends];
console.log(robin); 		// ['Robin', 'Nico', 33, Array(3)]

console.log(friends[0]);	// Michael
console.log(friends.length);	// 3

friends[2] = 'Ana'		// replace
friends[4] = 'Jay';		// add
console.log(friends);		// ['Michael', 'Ana', 'Nicole', empty, 'Jay']

// friends = ['Anna', 'Val']	// its mutable but not that much

const years2 = [1990, 1967, 1980, 2005, 2018];
const calcAge = function (birthYear) {
	return 2024 - birthYear;
}
// console.log(calcAge(years2));	// NAN
console.log(calcAge(years2[0]));

// array methods

const friends = ['Michael', 'Jena', 'Nicole'];

friends.push('Robin');
friends.unshift('Nami');
console.log(friends);		// ['Nami', 'Michael', 'Jena', 'Nicole', 'Robin']

friends.pop(); // it returns the popped element
friends.shift();
console.log(friends);		// ['Michael', 'Jena', 'Nicole']

friends.indexOf('Nicole');	// 2
friends.includes('Nicole');	// true

// code challenge 7
const calcTip = function (bill) {
    let tip;
    if (bill >= 50 && bill <= 300){
        tip = bill * 15 / 100;
    } else {
        tip = bill * 20 / 100;
    }
    return tip;
}

// forEach
const numbers = [1, 2, 3, 4];

numbers.forEach(function (number) {
  console.log(number);
});
// Output: 1, 2, 3, 4


// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// objects ==============================================================

const robinArray2 = [
	firstName, 
	'Nico', 
	2024 - 1991, 
	['Luffy', 'Nami', 'Usopp']
];

const firstName = 'Robin';
const robinObject = {
	firstName: firstName, 
	lastName: 'Nico', 			// string value
	idk: 10 + 10, 
	friends: ['Luffy', 'Nami', 'Usopp'],	// array value
	birthYear: 1990,			// number value
	hasDriversLicense: true,
	occupation: 'archeologist',
	
	calcAge1: function(birthYear) {		// function value -> method
		return 2024 - birthYear;
	},

	calcAge2: function() {			// this
		return 2024 - this.birthYear;
	},

	// when the method is called, it wil calculate the age and store it
	// later, if its needed again,
	calcAge3: function() {			
		this.age = 2024 - this.birthYear;
		return this.age;
	}
};
console.log(robinObject); // shows the properties in alphabetical order!
console.log(robinObject.lastName);
console.log(robinObject['lastName']);

const nameKey = 'Name';
console.log(robinObject['first' + nameKey]);
console.log(robinObject['last' + nameKey]);


console.log(robinObject.calcAge1(1990));
console.log(robinObject['calcAge1'](1990));

console.log(robinObject.calcAge2());

console.log(robinObject.calcAge3());
console.log(robinObject.age);


const interest = prompt('What property do you want to show?');
console.log(robinObject[interest]);

if(robinObject[interest]) {
	console.log(robinObject[interest]);
} else {
	console.log('wrong request');
}

robinObject.location = 'GrandLine'	// adding a property
robinObject['location'] = 'GrandLine'	// adding a property (changing it since it was already created)
console.log(robinObject);


const text = `${robinObject.firstName} is a ${robinObject.calcAge2()} years old ${robinObject.occupation}. She has ${robinObject.hasDriversLicense ? 'a' : 'no'} drivers license.`;
console.log(text);

// iteration =================================================================


for(let i = 0; i < 10; i++){
	console.log('this will be printed 10 times');
}

let i = 0;
while (i < 10){ // doesnt need a counter, just a condition
	console.log('this will be printed 10 times');
  i++;
}

// continue, break
const robinArray = [
	'Robin', 
	'Nico', 
	2024 - 1991, 
	['Luffy', 'Nami', 'Usopp'],
    'StrawHat'
];

for(let i = 0; i < robinArray.length; i++){
  if(typeof robinArray[i] !== 'string'){    // only print strings
    continue;
  }
	console.log(`${robinArray[i]}`);
}

for(let i = 0; i < robinArray.length; i++){
  if(typeof robinArray[i] === 'number'){    // stop after finding a number
    break;
  }
	console.log(`${robinArray[i]}`);
}

// for arrays -----------------------------
const years = [
	2003,
  1990,
  1978,
  2014,
  2008
];

const ages = [];

for(let i = 0; i < years.length; i++){
	console.log(`${years[i]}`);

  //ages[i] = 2024 - years[i];  // <v both work!!
  ages.push(2024 - years[i]);
}

for(let i = 0; i < ages.length; i++){
	console.log(`${ages[i]}`);
}

// ===========================================================
console.log(Math.random());         // between 0 and 1
console.log(Math.random() * 6);     // between 0 and 5 (decimal)
console.log(Math.random() * 6 + 1); // between 1 and 6 (decimal)
console.log(Math.trunc(Math.random() * 6) + 1)  // between 1 and 6 (integer)