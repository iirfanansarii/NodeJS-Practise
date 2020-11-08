
/* Stream
*Purpose:To handle large amount of data
 */

 /* createReadStream() Method
 * Purpose:To read stream 
 *Argument:Two where first  arguement is the location from where the data is coming and the 
 *second arguement to encode data into readable form 
 * 
  */

/* createWriteStream
* Purpose:To write one stream data into another stream
*Process:When readStream creates it takes data from read stream and then it goes to writeStream & create write stream
*We haven't created the blog.txt file when writeStream file execute it create that file we have just given name
 */


  /*on
  *Method Type: On Click Event 
   */

/* Note:
* we can make any stream in readable form either using toString method or encoding method
* when writeStream execute it create new file which we have defined in it's argument
*/


//import inbuilt file system node module
const fs = require('fs');


const readStream = fs.createReadStream('./docs/blog.txt',{encoding:'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog2.txt')

readStream.on('data',(chunk) => {

    console.log('-------------New Chunk----------');
    console.log(chunk);

    writeStream.write("\n New Chunk \n");
    writeStream.write(chunk);

})