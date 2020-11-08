/* Moduel & Require 
* Module: to break code into small file
*Require: To import any module or file
* */


/* xyz variable store all the things coming from prople file eg:people and age */
const xyz = require("./people");

/* importing both value (people and age) from people file together */
console.log(xyz);

/* importing both value (people and age) from people file separately */
console.log(xyz.people,xyz.age);

