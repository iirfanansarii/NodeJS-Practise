//Global object

/* to check global object */
console.log(global);


/* Global object :setTimeout
*Purpose:To run below function after five second or after 5000ms 
*/
global.setTimeout(() => {
    console.log('in the timeout');
    
}, 5000);

