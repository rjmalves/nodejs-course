const person = {
    name: "Max",
    age: 29,
    greet: () => {
        console.log("Hi, I am " + this.name);
    }
};

// If we want to write a function to only print
// the name of person, but a 3rd party API gives us
// always the whole object, we could do:
const printName = (personData) => {
    console.log(personData.name);
}
printName(person);

// But we could also use a concept called object destructuring
// In this case, it expects that the received argument has
// a property called name and already extracts it.
// We can extract more than one separating by ,
const betterPrintName = ({ name }) => {
    console.log(name);
}
betterPrintName(person);

// We can use destructuring also in attribution
const { name, age } = person;
console.log(name, age);

// Also we can destructure arrays, and here we can choose any name
// for the receiving variables.
const hobbies = ["Sports", "Cooking"]; 
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
