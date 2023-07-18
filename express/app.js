const express = require("express");
const app = express();
const path = require("path");

const people = require("./routes/people");
const auth = require("./routes/auth");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false })); //Parse form data
app.use(express.json()); //Parse json

app.use("/api/people", people);
app.use("/login", auth);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(5000, () => {
  console.log("Server started at PORT 5000");
});
