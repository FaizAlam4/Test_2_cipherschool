// Question: Write a JavaScript function multiplyByTwo that takes a number as an argument and multiplies it by two. Implement a callback function callback that receives the result of the multiplication and displays it on the console.
// Example Input: multiplyByTwo(5, callback);

const prompt=require('prompt-sync')();

let num=Number(prompt("Enter the number:"));


function byTwo(n){
    console.log(n*2);
}

function multiplyByTwo(num,callback){
    callback(num);
}


multiplyByTwo(num,byTwo);