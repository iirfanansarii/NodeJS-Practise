/* 
*Global object in node is different  from the global object in window(console)
* so most of the thing in window object we can't access
*eg:DOM method 
* i.e console.log(document.querySelector);
*you cant access this method coz document is defined in window object
*/

console.log(document.querySelector);

//error: ReferenceError: document is not defined
//you cant access this method coz document is defined in window object

