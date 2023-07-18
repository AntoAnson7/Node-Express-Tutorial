const express = require("express");
const app = express();
const path = require("path");
const { products, people } = require("./data");

//! Middleware functions

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user == "anto") {
    req.user = { name: "anto", id: "0x6bc7chdyfgdgt", wallet: "Metamask" };
    console.log("authorized");
    res.json(req.user);
    next();
  } else {
    console.log("Access denied");
  }
};

const middleWare = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); //! Direct middleware to next  ie. app.get()
};

app.use([middleWare, authorize]); //! Adds the middleware to all routes

app.get("/", (req, res) => {
  res.send("Home");
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
