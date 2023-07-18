const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name) => {
  console.log(`Data received : ${name}`);
});

customEmitter.emit("response", "thomas");
