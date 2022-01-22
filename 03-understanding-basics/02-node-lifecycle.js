const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    // With this line, we can finish a listening process.
    // when all are done, Node exits.
    process.exit();
});
server.listen(3000);
