const speak = (name) => {
  console.log(`Hey , ${name}`);
};

const talkback = (name) => {
  console.log("Access denied for " + name);
};

module.exports = { speak, talkback };

// !APP
// const { speak, talkback } = require("./modulea.js");

// speak("Nick");
// talkback("Ander");
