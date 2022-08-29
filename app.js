const os = require('os');
//Operating system
// var tm=os.totalmem();
// var fm=os.freemem();
 
// console.log('Total Memory '+ tm);
// console.log('Free Memory '+ fm);
// //File System
// const fs = require('fs');
// const files= fs.readdirSync('./');
// console.log(files);
// /Events
const EventEmitter = require('events');
const emitter = new EventEmitter();

// emitter.addListener();
//register a listener
emitter.addListener('messageLogged', function(){
    console.log('Listener called');
});

//Raise an event
emitter.emit('messageLogged'); 
//signals that an event has happened

//Http Module
const http= require('http');
// const { Socket } = require('dgram');
const server    = http.createServer((req, res)=>{
    if (req.url ==='/'){
        res.write('helloWorld');
        res.end();
    }
});
// server.on('connection', (Socket) => {
//     console.log('New Connection....');
// }); 
server.listen(3000);
console.log('Listening on port 3000...');