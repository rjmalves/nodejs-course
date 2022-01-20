// The most basic funcionality in JS
console.log("Hello from Node.js");

// In Node we can make file IO, which is not possible in the browser.

// The require function is also provided by Node
const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello from Node.js");
