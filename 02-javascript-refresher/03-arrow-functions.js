const name = "Max";
let age = 29;
const hasHobbies = true;

// This is the classical syntax for defining a function, or an
// anonymous function.

const summarizeUser = function (userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

// Now we can do it with another syntax, which actually facilitates
// the work by using the 'this' keyword

const summarizeUserArrow = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

// Arrow functions have another syntax for one-liners. For example,
// a function to add two numbers should be:

const add = (a, b) => {
  return a + b;
};

// But it can be rewritten:

const betterAdd = (a, b) => a + b;

// An even simpler case is for functions with only one argument:
const addOne = (a) => a + 1;
const betterAddOne = a => a + 1;

// If a function has no arguments, however, the parenthesis are mandatory:
const addRandom = () => 1 + 2;

console.log(add(1, 2));
console.log(betterAdd(1, 2));
console.log(addOne(1));
console.log(betterAddOne(1));
console.log(addRandom());