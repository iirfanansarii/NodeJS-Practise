//import http
const http = require("http");

//import inbuilt node file system module
const fs = require('fs');

//import lodash
const lod = require('lodash');


//create server
const server = http.createServer((req, res) => {
 

//lodash is a random method to generate a random number when browser refresh 
const num = lod.random(0,24);
console.log(num);


//lodash once method to run a functon only once even function repeated
const  greet = lod.once(() =>{
console.log('hello');
})

greet();
greet();

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


/* Redirect Page logic  */
  //below we are just redirecting so we don't need to append the path i.e no path require
  // res 301 : means resource you are trying to access has been permamentaly moved
  case "/about-me":
    res.statusCode = 301;
    //actual redirect using a res header
    res.setHeader('Location','/about');
    res.end();
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
