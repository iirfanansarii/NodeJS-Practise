/* here  we are going to create server using node js  
*where we will see how to get a request from browser 
* Not how to respond to the browser
*/

/*http module
*Purpose:The first thing require to create a server is http module
*/

const http = require('http');

/* createServer method
*Purpose:method to create server
*/

/*req & res
*Purpose:Request from client side like get,post,delete,patch..etc for client side 
*res: Response from server side 
*/

//This code runs in backend i.e in termimal
const server = http.createServer((req,res) => {
   console.log('request made');
});

// listening to local server 
server.listen(3000,'localhost',() =>{
    console.log('Listening for request on  port 3000')
})
