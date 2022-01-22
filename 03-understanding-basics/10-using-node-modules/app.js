const http = require("http");

// We acquire the exported object from the routes file
const routes = require("./routes");

// We pass this at the server creation as a handler
const server = http.createServer(routes);
server.listen(3000);
