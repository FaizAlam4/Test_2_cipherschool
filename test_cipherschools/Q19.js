// Question: Write a JavaScript function checkFileExists that checks if a file exists asynchronously using promises. The function takes a file path as an argument and returns a promise. Inside the function, after a delay of 1 second, check if the file exists. If the file exists, resolve the promise. If the file does not exist, reject the promise.
// Example Input:checkFileExists('/path/to/file.txt')

const fs=require('fs');


function checkFileExists(p){



    return new Promise((resolve,reject)=>{
setTimeout(()=>{
fs.stat(p,(err,data)=>{
if(err)
reject("Not found!");

else
resolve("Found!");
})

}, 1000)

    })
}

let ans=checkFileExists("./mynewfile3.txt");
ans.then((data)=>console.log(data)).catch((err)=>console.log(err))