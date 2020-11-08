
/* Stream
*Purpose:To handle large amount of data
 */

 /* createReadStream() Method
 * Purpose:To read stream 
 *Argument:Two where first  arguement is the location from where the data is coming and the 
 *second arguement to encode data into readable form 
 * 
  */

  /*on
  *Method Type: On Click Event 
   */

/* Note:
* we can make any stream in readable form either using toString method or encoding method
*/


//import inbuilt file system node module
const fs = require('fs');


const readStream = fs.createReadStream('./docs/blog.txt',{encoding:'utf-8'});

readStream.on('data',(chunk) => {

    console.log('-------------New Chunk----------');
    console.log(chunk);

})