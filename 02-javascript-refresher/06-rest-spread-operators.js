const hobbies = ["Sports", "Cooking"]; 

// Suppose we want to implement a pattern in which we never change
// existing objects. Therefore, for the array we want to, when appending
// a new element, return the previous elements plus the new one as a copy.

// To copy an array, we can:

// 1 - slice without arguments
const copiedArray = hobbies.slice();
console.log(copiedArray);

// 2 - spread operator: pulls out all elements or properties from
// container and puts in the surrounding object.
// IMPORTANT: works with objects and arrays.
const copiedArray2 = [...hobbies];
console.log(copiedArray2);

// The rest operator does the inverse of the spread operator.
// It can puts elements inside an array.

// If we want an 'toArray' function, we could do:
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]
}
console.log(toArray(1, 2, 3));

// But it is totally unflexible, works only for 3 elements
// Using the rest operator:
const toArrayGeneralized = (...args) => {
    return args;
}
console.log(toArrayGeneralized(1, 2, 3));
