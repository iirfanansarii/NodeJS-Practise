//Global object example


/* Global object :setInterval
*Purpose:To run below function after every one second or after 1000ms 
*/

const int = setInterval(() =>{
    console.log('running after every one second');
}, 1000);



/*Gloabal Object:clearInterval
* Purpose:To clear the  setInterval in timeout
*/

setTimeout(() =>{
    console.log('stop setInterval fuction in timeout 3ms');
    clearInterval(int);
},3000);


