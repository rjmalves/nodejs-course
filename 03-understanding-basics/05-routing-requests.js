const http = require("http");


// Now we begin to use some functionalities of both req and res
// Lets write a server that has some routing.
// If the route "/" is accessed, the use can input some data
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>")
        res.write("<body><form action='/message' method='POST'><input type='text' name='data'><button type='submit'>Send</button></form></body>")
        res.write("</html>");
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
