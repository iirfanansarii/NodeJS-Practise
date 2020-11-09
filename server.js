//import http
const http = require("http");

//import inbuilt node file system module
const fs = require('fs');

//create server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

 //set header content type
 res.setHeader('Content-Type','text/html');

let path = './views/';
switch (req.url) {
  case "/":
    path += "index.html";
    res.statusCode = 200;
    break;

  case "/about":
    path += "about.html";
    res.statusCode = 200;
    break;

  default:
    path += "404.html";
    res.statusCode = 404;
    break;
}


 //send html file simple routing method
 fs.readFile(path, (err, data) => {
   if (err) {
     console.log(err);
     res.end();
   } else {
     //  res.write(data);
     
     res.end(data);
   }
 });
});

// listen to server
server.listen(3000, "localhost", () => {
  console.log("Listening for request on  port 3000");
});
