const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const name = req.body.name;
  name
    ? name == "Anto"
      ? res.send(`<h1>Hey , ${name}</h1>`)
      : res.send("<h1>Auth Failed</h1>")
    : res.send("<h1>Enter a name</h1>");
});

module.exports = router;
