const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>")
        res.write("<body><form action='/message' method='POST'><input type='text' name='data'><button type='submit'>Send</button></form></body>")
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method == "POST") {
        // If this happens, we want to redirect the user to "/" again
        // and save the contents to a file.
        const body = [];
        // req.on is registering an event listener for the "data" event
        // request data comes as chunks
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        // now it is registering and event listener for the "end" event
        // which means the request was entirely read.
        // This only works because the body of the request will come as text,
        // because the form was made in that way
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            // the parsedBody comes as data=..., so we split before writing
            const message = parsedBody.split("=")[1]
            fs.writeFileSync("message.txt", message);
        });
        // The response code 302 is used for redirection
        res.statusCode = 302;
        // The Location header gives the route to redirect
        res.setHeader("Location", "/");
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>")
    res.write("<body><h1>Hello from my Node.js server!</h1></body>")
    res.write("</html>");
    res.end();
});
server.listen(3000);
