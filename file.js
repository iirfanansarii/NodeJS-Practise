/*The File System  (fs)
 *Purpose: To interact with computer file
 *Module Type: Inbuilt node module
 */

/* Directories-1
 *Purpose:To create new directory or folder
 *Method : mkdir
 *Method Type:asyc
 *Argument:It rquire two argument one is directory name which is about to created
 * and second one is callback function
 */

 /* Directories-2
 *Purpose:To remove existing directory or folder
 *Method : rmdir
 *Method Type:asyc
 *Argument:It rquire two argument one is directory name which is about to removed
 * and second one is callback function
 */


/* existsSync() method
 *This method require one parameter and if that exists then it blocks further code
 *that is why we have used Not(!)
 */

//import inbuilt file system(fs) node module
const fs = require("fs");

//creating directory

if (!fs.existsSync("./assets")) {
  //directories
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
 
}
else{
    fs.rmdir('./assets',(err) =>{
      if(err){
          console.log(err);
      }
      console.log('Folder removed ')
    })
}



/* Note:
 *Since this method use to create new diectory or folder so when you'd run this code
 *at the very firs time it will create that folder but if you'd run the same code
 * it wil show you error that the directory is already created .
 * so better change the name of directory when you run again run same code
 * or apply exitsSync() method to block the further code if that folder/directory already exists
 *  */
