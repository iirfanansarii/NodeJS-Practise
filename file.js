/*The File System  (fs)
*Purpose: To interact with computer file 
*Module Type: Inbuilt node module
*/

/* writting File
* Purpose: To write in a  file from local folder
*Method : writeFile('',() =>{})
*Method Type: Async that mean it takes too much time to do i.e before it runs its fuction the javascript runs it's further line 
*Arugument : Require three arguement one is string type and that is file location 
*and the second argument is the text which is going to replace the text present in that file
* and the third callback fucnton 
*/

 
//import inbuilt node module
const fs  = require('fs');


 //writting file 
fs.writeFile('./docs/blog.text','code replace',(error,data) =>{
    console.log('blog text replaced');
})

// if the file is not present which was about to written then it cretes that file 

fs.writeFile("./docs/blog1.text", "I was not here,rather i'm created ", (error, data) => {
  console.log("blog text replaced");
});
