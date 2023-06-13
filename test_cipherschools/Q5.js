// Write a Node.js program that creates an HTTP server using the built-in 'http' module and responds with "Hello World!" when accessed.
var http = require('http');

let serv=http.createServer((req,res)=>{

    res.end("Hello");


});

serv.listen(8000);