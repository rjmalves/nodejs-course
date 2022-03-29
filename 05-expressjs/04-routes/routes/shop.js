const express = require("express");

const router = express.Router();

// Using the specific verb functions also turns the route
// matching to a exact match.
router.get("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

module.exports = router;
