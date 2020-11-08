/*req & res
 *req: to send request from browser
 *res:to send request to browser
 *conclusion: a req is send from browser to server and then that req sends back in the form of res  to browser
 *eg: search for anything on google and get that thing
 */

/*More Clarificaton:
 * what ever you type on browser after your url (eg:localhost:3000) store on req
 *eg: localhost:3000         mean  req= / (forward slash only)
 *eg: localhost:3000/about   mean  req= /about (forwrd slash with about)
 * you can see these value in terminal after type any url in browser
 */

//import http
const http = require("http");

//create server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content type (here plain text)
  //   res.setHeader("Content-Type", "text/plain");
  //   res.write("Hello World");
  //   res.end();

  //this not the good way to set response type
  //set header content type (here type is  html )
   res.setHeader("Content-Type", "text/html");
  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write(" <p>Hello World</p> ");
  res.end();
});

// listen to server
server.listen(3000, "localhost", () => {
  console.log("Listening for request on  port 3000");
});
