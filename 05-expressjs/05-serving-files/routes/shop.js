// We use the path module for accessing the files in disk
const path = require("path");

const express = require("express");

const router = express.Router();

// We can use the sendFile method to return an html file.
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
