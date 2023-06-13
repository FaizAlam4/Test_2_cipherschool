// Question: Modify the previous program to include an HTTP header with the content type 'text/html' in the server response.
var http = require('http');

let serv=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("Hello");


});

serv.listen(8000);