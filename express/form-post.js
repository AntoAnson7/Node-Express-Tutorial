const express = require("express");
const app = express();
const path = require("path");
let { people } = require("./data");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false })); //Parse form data
app.use(express.json()); //Parse json

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.get("/api/people", (req, res) => {
  res.json({ success: true, data: people });
});

//! POST (JAVASCRIPT)
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ status: false, msg: "Please provide name" });
  }
  res.json({ success: true, person: name });
});

//! POST (HTML)
app.post("/login", (req, res) => {
  const name = req.body.name;
  name
    ? name == "Anto"
      ? res.send(`<h1>Hey , ${name}</h1>`)
      : res.send("<h1>Auth Failed</h1>")
    : res.send("<h1>Enter a name</h1>");
});

app.listen(5000, () => {
  console.log("Server started at PORT 5000");
});
