const http = require("http");
const path = require("path");
const fs = require("fs");

const Path = path.join(__dirname, "public", "./index.html");

const server = http.createServer((req, res) => {
  fs.readFile(Path, (err, data) => {
    if (err) {
      return res.end("Something went wrong");
    } res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
