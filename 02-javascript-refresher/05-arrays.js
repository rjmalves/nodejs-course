// In JS arrays can have objects of different types.
// We can use loops to iterate over arrays:
const hobbies = ["Sports", "Cooking"]; 
for (let hobby of hobbies) {
    console.log(hobby);
}

// Or we can use one of the builtin methods of arrays:
console.log(hobbies.map(hobby => "Hobby: " + hobby));
console.log(hobbies);

// Notice that key-value objects and arrays are reference types.
// It means that they are types that point to other things, and
// therefore we can change what they point to, if they are declared
// as constants.
hobbies.push("Programming");
console.log(hobbies);
