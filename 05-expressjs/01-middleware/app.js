const http = require("http");

const express = require("express");

const app = express();

// A middleware by default is called on every request 
app.use((req, res, next) => {
    console.log("In the middleware!");
    next(); // Allows the request to go to the next middleware
});

app.use((req, res, next) => {
    console.log("In another middleware!");
    // Here we should send the response
    res.send("<h1>Hello from Express!</h1>");
});



const server = http.createServer(app);

server.listen(3000);
