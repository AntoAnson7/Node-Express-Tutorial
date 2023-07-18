const express = require("express");
const app = express();
const path = require("path");
let { people } = require("./data");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false })); //Parse form data
app.use(express.json()); //Parse json

//! POST (HTML)
app.post("/login", (req, res) => {
  const name = req.body.name;
  name
    ? name == "Anto"
      ? res.send(`<h1>Hey , ${name}</h1>`)
      : res.send("<h1>Auth Failed</h1>")
    : res.send("<h1>Enter a name</h1>");
});

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

//! PUT
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((p) => p.id == Number(id));

  if (!person) {
    return res.status(404).json({ status: false, msg: "Person not found" });
  } else {
    person.name = name;
    return res.send(person);
  }
});

//! DELETE
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((p) => p.id == id);
  if (!person) {
    return res
      .status(404)
      .json({ status: false, msg: "NO person with given id to delete" });
  } else {
    let after = people.filter((p) => p.id != id);
    res.json({ status: true, persons: after });
  }
});

app.listen(5000, () => {
  console.log("Server started at PORT 5000");
});
