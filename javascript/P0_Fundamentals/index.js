/* ---

to run locally:
node index.js

js was made to run in browser. 
every browser has a js engine to run js code (firefox -> spidermonkey, chrome -> v8)

js embedded in a c++ program -> node
node includes google's v8 engine
now, we can run js outside of the browser!

browsers and node provide a runtime environment for the js code
that's why we can run js code on the browser's console

--- */

console.log('wuwuwu')
console.log(505050);

let a;
console.log(a); // undefined
// by default, the value of variables not initialized is undefined

const x = 2;

// primitives types (stuff you can assign to a variable):
a = "word";  // typeof = string literal
a = 2;       // number literal
a = 2.1;     // number literal
a = true;    // boolean
a = undefined; // undefined
a = null;    // object

/**
 * js is a dynamic language, dinamically-typed language
 * 
 * you can change the type of a variable
 */

/**
 * reference types:
 * object      
 * array        typeof [] -> object
 * function
 * 
 * {} object literal
 * [] array literal, indicates an empty array
 * 
 * objects have properties that you can access with the dot notation
 * forEach, length, includes 
 * 
 * arrays are objects, so they also have those properties
 */

// objects::::::::::::

let person = {
    name: 'Lisa',
    age: 25
};
console.log(person);
// access stuff from an object:
console.log(person.name);
console.log(person['name']);

// bracket notation is useful when you dont know what you want to access
// while writing the code. maybe its something the user will select
let selection = 'some_user_input';
console.log(person[selection]);

// arrays:::::::::::::

let emptyArray = [];

let colors = ['white', 'purple', 'yellow']; // is white a color?
// dynamic size! :o
colors[3] = 'red';
console.log(colors);
// can have objects of different types
colors[4] = 2020;
console.log(colors);

console.log(colors[0]);
console.log(colors.length);

// functions::::::::::::::

function greet() {
    console.log('hi!');
}

greet();

function betterGreet(name /**parameter */) {
    console.log('hi ' + name + '!');
}

betterGreet('momo' /**argument */);

let i = 0.2 + 0.1;
console.log(i);
let j = (0.2 * 10 + 0.1 * 10) / 10;
console.log(j);

let w = "100";
let y = "10";
console.log(w - y);    
console.log('100' - y);     
console.log(w * y);
console.log(w / y);
console.log(w + y); // wont work: strings will be concatenated

let apples = "2";
let oranges = "3";

console.log(apples + oranges);
console.log(+apples + +oranges);
console.log(Number(apples) + Number(oranges));
