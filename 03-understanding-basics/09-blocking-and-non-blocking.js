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
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1]
            // instead of writing the file syncronously, what could
            // freeze handling other requests, we should do it in Node's
            // event-driven methods.
            // this registers an event listener which has a callback
            fs.writeFile("message.txt", message, err => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }

});
server.listen(3000);
