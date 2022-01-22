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
        // and save the contents to a file. For now, we just write dummy.
        fs.writeFileSync("message.txt", "DUMMY");
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
