// Question: Write a Node.js program that reads the contents of an HTML file and returns the content as the response when accessed via an HTTP server.
var http = require('http');
var fs=require('fs');



let result=fs.readFileSync("./Q8.html", (err,data)=>data);

let serv=http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type": "text/html"});
    res.write("My result: "+result);
    res.write("\n");
    res.end("");
});

serv.listen(8000);