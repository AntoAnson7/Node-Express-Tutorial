const fs = require("fs"); //require("fs").promises can be
// used to avoid all the extra steps it makes the normal functions
// readFile() and writeFile() to work as promises so that async/await can be used

const util = require("util");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}; //! This getText() function can be simplified using a util option give below

const rFileprom = util.promisify(fs.readFile);
const wFileprom = util.promisify(fs.writeFile);

// THEN TO GET THE DATA

//! THIS
getText("./file/async.txt").then((res) => {
  console.log(res);
});

//! OR -------
const start = async (path) => {
  try {
    const first = await getText(path);
    console.log(first);
  } catch (err) {
    console.log(err);
  }
};
