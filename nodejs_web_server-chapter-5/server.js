const http = require('http');
let path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { }

// initialize object 
const myEmitter = new Emitter();

const PORT = 5900;

const server = http.createServer((req,res)=>{
    console.log(req.method);

    if(req.url === '/' || req.url === 'index.html'){
        res.statusCode = 200;
        req.setHeader('Content-Type','text/html');
        path = path.join(__dirname,'views','index.html');
        fs.readFile(path,'utf-8',(err,data) => {
            res.end(data);
        })
    }
})

server.listen('PORT', ()=> {

    console.log(`server running on port: ${PORT}`);
})