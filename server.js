//import http
const http = require("http");

//create server
const server = http.createServer((req, res) => {
  console.log(req.url,req.method);
});

// listen to server
server.listen(3000, "localhost", () => {
  console.log("Listening for request on  port 3000");
});

