const os = require("os");
const path = require("path");

const abs = path.resolve(__dirname, "modulea.js"); //absolute path

console.log(path.basename(path.join(__dirname, "test.js")));
