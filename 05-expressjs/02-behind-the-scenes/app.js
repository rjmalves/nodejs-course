const express = require("express");

const app = express();


// The use function can receive a "path"
app.use("/", (req, res, next) => {
    console.log("This always runs!");
    next();
});

app.use("/add-product", (req, res, next) => {
    console.log("In another middleware!");
    // Here we should send the response
    res.send("<h1>Hello from 'Add-Product'!</h1>");
});

// The use function can receive a "path"
app.use("/", (req, res, next) => {
    console.log("This only runs on undefined routes!");
    res.send("<h1>Try to reach me!</h1>");
});

app.listen(3000);
