const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.end(`{data : datavals}`);
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>Cant find the page</p>
    <a href="/home">Back home</a>`);
  }
});

server.listen(8080);
