const { readFileSync, writeFileSync } = require("fs");

//! Synchronous
const test = readFileSync("./test.txt", "utf8");
const other = readFileSync("./other.txt", "utf8");

console.log(test);
console.log(other);

writeFileSync(
  "./newTest",
  `This is F1 val: ${test.substring(0, 10)} and F2: ${other.substring(0, 15)}`
);

//! Asynchronous
const { readFile, writeFile } = require("fs");

readFile("./file/test.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  writeFile("./file/async.txt", `The file is : ${first}`, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Write done");
  });
});
