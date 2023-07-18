const express = require("express");
const app = express();
const path = require("path");
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  const formatted = products.map((p) => {
    const { id, image, name } = p;
    return { id, image, name };
  });
  res.json(formatted);
});

//! URL params eg: localhost:5000/api/3
app.get("/api/products/:id", (req, res) => {
  id = req.params.id;
  const product = products.find((p) => p.id == id);

  if (!product) {
    res.status(404).send("<h1>Product does not exist!</h1>");
  }
  res.json(product);
});

//! complex queries -- eg: localhost:5000/api/v1/query?search=a&limit=2
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    return (sorted = sortedProducts.filter((p) => p.name.startsWith(search)));
  }
  if (limit) {
    return (sorted = sorted.slice(0, Number(limit)));
  }
  if (sorted.length < 1) {
    return res.json({ success: true, data: null });
  }
  res.json(sorted);
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
