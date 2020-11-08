/*The File System  (fs)
 *Purpose: To interact with computer file
 *Module Type: Inbuilt node module
 */

/*Purpose:delete a file
 *Method:unlink
 *Argument:two argument require in which one is location of the file and another one is callback function
 */

/* existsSync()
 *Purpose:block the further code if it already exists
 *Argument:require only one argument
 */

//import inbuilt file system node module
const fs = require("fs");

//delelting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}

/* Note:
 * This method would delete the file only when it exits that mean if you'd run thid code
 * again and agian this is not goig to show you any error
 */
