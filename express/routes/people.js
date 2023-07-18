const express = require("express");
const router = express.Router();
let { people } = require("../data");

router.get("/", (req, res) => {
  res.json({ success: true, data: people });
});

//! POST (JAVASCRIPT)
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ status: false, msg: "Please provide name" });
  }
  res.json({ success: true, person: name });
});

//! PUT
router.put("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
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

module.exports = router;
