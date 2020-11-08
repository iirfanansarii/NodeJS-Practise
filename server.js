//import http
const http = require("http");

//import inbuilt node file system module
const fs = require('fs');

//create server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

 //set header content type
 res.setHeader('Content-Type','text/html');

 //send html file
 fs.readFile('./views/index.html',(err,data) => {
     if(err){
         console.log(err);
         res.end();
     }
     else{
        //  res.write(data);
         res.end(data);
     }
 })
});

// listen to server
server.listen(3000, "localhost", () => {
  console.log("Listening for request on  port 3000");
});
