// destructuring is used to pull out values 
// from arrays or objects

// array destructuring
const numbers = [1, 2, 3];

const [num1, , num2] = numbers;

console.log(num1, num2);


// object destructuring
const person = { 
    name: 'Jacob', 
    age: 23 
};

const {name} = person;

console.log(name);
console.log(age);

