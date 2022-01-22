const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // res is empty by default, we need to fill it with data
    // Content-Type is an default header that all browsers understand
    res.setHeader("Content-Type", "text/html");
    // We can write the body in pieces.. all goes to the buffer
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>")
    res.write("<body><h1>Hello from my Node.js server!</h1></body>")
    res.write("</html>");
    // This sends back the response, not allowing any more writes after it's called
    res.end();
});
server.listen(3000);
