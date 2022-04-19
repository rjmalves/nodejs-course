const path = require("path");

// We can use an helper funcion to give us the directory of the
// entrypoint for the application
module.exports = path.dirname(require.main.filename);
