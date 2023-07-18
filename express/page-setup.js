const http = require("http");
const { readFileSync } = require("fs");

const home = readFileSync("./index.html");

server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/HTML" });
  if (req.url == "/8") {
    res.end(
      "<h1>check balance {$350,688}</h1><a href='/'><button>Back</button></a>"
    );
  } else if (req.url == "/home") {
    res.end(home);
  } else {
    res.writeHead(200);
    res.end(
      "<a href='/8'><button>Balance</button></a> </br><a href='/home'><button>Home</button></a>"
    );
  }
});

server.listen(8080, () => {
  console.log("Listening on PORT 8080");
});
