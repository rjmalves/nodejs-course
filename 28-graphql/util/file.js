const fs = require("fs");
const path = require("path");

const clearImage = (filePath) => {
  filePath = path.join(__dirname + "/../" + filePath);
  filePath = filePath.replace("\\", "/");
  fs.unlink(filePath, (err) => {
    console.log(err);
  });
};

exports.clearImage = clearImage;
