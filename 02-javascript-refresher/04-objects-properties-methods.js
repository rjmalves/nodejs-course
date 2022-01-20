// Objects are defined in JS with curly braces.

// An object's properties can be either variables or functions.
// A function can be written in the arrow form, in order to make possible
// the use of the 'this' keyword. However, is shouldn't work this way:
const person = {
    name: "Max",
    age: 29,
    greet: () => {
        console.log("Hi, I am " + this.name);
    }
};
person.greet();

// In order to make it work, one can use either of these syntaxes:
const greetingOldPerson = {
    name: "Max",
    age: 29,
    greet: function() {
        console.log("Hi, I am " + this.name);
    }
};
greetingOldPerson.greet();

const greetingNewPerson = {
    name: "Max",
    age: 29,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};
greetingNewPerson.greet();

console.log(person);
