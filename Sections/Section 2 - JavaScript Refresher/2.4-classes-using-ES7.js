// ES7 also called Next Generation JavaScript

class Human {
    gender = 'male'; // in ES7, properties (attributes/fields) can be assigned without constructor
    printGender = () => { // ES7 methods are using arrow functions
        console.log(this.gender);
    }
}

class Person extends Human{
    name = 'Jacob'; // no need to call super() anymore in ES7

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();