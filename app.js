// array functions

const numbers = [1, 2, 3];

// The map() method creates a new array populated
// with the results of calling a provided function
// on every element in the calling array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);


// The find() method returns the value of the first 
// element in the provided array that satisfies 
// the provided testing function. If no values satisfy 
// the testing function, undefined is returned.
const lessOrEqualThanTwo = numbers.find(num => num <= 2);

console.log(lessOrEqualThanTwo);

