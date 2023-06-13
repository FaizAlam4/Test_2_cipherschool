const { type } = require('jquery');

const prompt = require('prompt-sync')();
//readline-sync could also be used

let inp=Number(prompt("Enter number:"));

let num=0;

while(inp>0){
    let rem=inp%10;
    num=num*10+rem;
    inp=Math.floor(inp/10);
}

console.log(num);