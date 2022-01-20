// If we use let in the variable creation, which works in a
// similar way of var, the scoping is different.

// Using a variable before the line of it's definition results
// in a undefined value with var, and an error with let.

// We can use the const keyword to ensure a constant variable,
// launching an error if we try to change it.
const name = "Max";
let age = 29;
const hasHobbies = true;

// Variables have types, but they can change.
// name is string, age is number, hasHobbies is boolean

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
