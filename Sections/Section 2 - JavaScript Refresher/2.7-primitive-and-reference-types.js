// primitive types, copies themselves
// string, numbers and booleans are primitive types

const number = 1;
const num2 = number;

console.log(num2);


// reference types, copies reference
// objects and arrays are reference types

const person = {
    name: 'Jacob'
};

const secondPerson = person; // secondPerson copies just "pointer" to person

person.name = 'aasdasd'; // we changed name of first person, 
// but printing second person shows us, they point to one same person
console.log(secondPerson);



// to create copy, and not just reference copy,
// we need to copy all of objects fields to new person
const person2 = {
    name: 'Jacob2'
};

const person3 = {
    ...person2 // nice usage of spread operator
};

person2.name = "new changed name";

console.log(person3); // we can see, that person2 is unchanged...