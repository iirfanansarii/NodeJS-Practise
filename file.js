/*The File System  (fs)
*Purpose: To interact with computer file 
*Module Type: Inbuilt node module
*/

//import inbuilt node module
const fs  = require('fs');


/* Reading File
* Purpose: To read file from local folder
*Method : readFile('',() =>{})
*Method Type: Async that mean it takes too much time to do i.e before it runs its fuction the javascript runs it's further line 
*Arugument : Require two arguement one is string type and that is file location to be read and when it's done 
*then it fires callback function i.e second argument
*and the second argument is  is callback function and inside that call back function we take two things
* error(is there's any) and data(the stuff we read from the file)
*/

/* Buffer
*Buffer is something(number) a file send when a function is called that file to read data from it
*
 */

fs.readFile('./docs/blog.txt',(error,data) =>{
if(error){
    console.log(err);
}
/* display only buffer */
 //console.log(data);

/* To display actual data not buffer */
  console.log(data.toString());

})

//to check that javascript runs before the async file
console.log('last line');


