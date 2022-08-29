const os = require('os');

var tm=os.totalmem();
var fm=os.freemem();
 
console.log('Total Memory '+ tm);
console.log('Free Memory '+ fm);

const fs = require('fs');
const files= fs.readdirSync('./');
console.log(files);

// /Events