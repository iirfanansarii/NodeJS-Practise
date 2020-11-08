/* Moduel & Require 
* Module: to break code into small file
*Require: To import any module or file
* */


/* Importing multiple thing from another file(people.js) */
/* here we are importing people and age both things */
const {people,age} = require("./people");


/* since only importing people data from people file so can only display people data */
console.log(people,age);

