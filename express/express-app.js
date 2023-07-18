const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.all("*", (req, res) => {
  res.status(404).send("PAGE NOT FOUND");
});

app.listen(5000, () => {
  console.log("Listening on PORT 5000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
