// normal function

// function printMyName(name) {
//     console.log(name);
// }

// printMyName('Jacob');


// classic arrow function
// const printMyName = (name) => {
//     console.log(name);
// };

// printMyName('Jacob');

// few infos:
// if we have EXACTLY ONE parameter of function (in this example name) we can
// omit parenthesis...
// example:
const printMyName = name => {
    console.log(name);
};

printMyName('Jacob');

// example with two parameters
const printMyNameAndAge = (name, age) => {
    console.log(name, age);
};

printMyName('Jacob', 23);


// if we have one simple return, we can omit body,
// and return keyword, having it all in one line
// example:
const multiply = number => number * 2;

console.log(multiply(2));


// reasons of arrow functions are:
// it is bit shorter (omits function keyword)
// solves issues with "this" keyword inside
// (doesnt surprisingly change context of "this" 
// inside function during runtime)