
/* Stream
*Purpose:To handle large amount of data
 */

 /* createReadStream() Method
 * Purpose:To read stream 
 *Argument:One arguement and that is the location from where the data is coming
 * 
  */

  /*on
  *Method Type: On Click Event 
   */


//import inbuilt file system node module
const fs = require('fs');


const readStream = fs.createReadStream('./docs/blog.txt');

readStream.on('data',(chunk) => {

    console.log('-------------New Chunk----------');
    console.log(chunk.toString());

})