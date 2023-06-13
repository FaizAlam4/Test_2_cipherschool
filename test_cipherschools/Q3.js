// Question: Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.
// Example:
// Input: "Hello, World!"

let str="Hello,World!";
str=str.toLowerCase();
let count=0;

for(let i=0;i<str.length;i++){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
    count++;
}

console.log(count);