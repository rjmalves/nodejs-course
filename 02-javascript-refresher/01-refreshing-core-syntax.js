var name = "Max";
console.log(name);

var age = 29;
var hasHobbies = true;

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
