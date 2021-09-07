// "..." is spread & rest operator 

// Spread is used to split up array elements OR object properties
// Spread examples:
// example:
// const newArray = [...oldArray, 1, 2];
// pulls elements of old array, and add them to newArray, and also adds new elements

// another example:
// const newObject = { ...oldObject, newProp: 5 };

// Rest is used to merge a list of function arguments into an array
// also used less
// Rest example:
// function sortArgs(...args) { return args.sort(); }

// more examples:
// spread:
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
    name: 'Jacob'
};

const newPerson = {
    ...person,
    age: 23
}

console.log(newPerson);

// rest:
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));