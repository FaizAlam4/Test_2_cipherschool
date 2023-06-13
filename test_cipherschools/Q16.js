// Question: Implement a JavaScript function calculateSum that takes an array of numbers as an argument and calculates their sum. The function should accept a callback function callback that receives the calculated sum. Invoke the callback function with the sum of the array elements.
// Example Input:calculateSum([2, 4, 6, 8], callback);

// Expected Output:Sum: 20

function mySum(n){
console.log(n);
}

function calculateSum(num,callback){
    let sum=0;
for(let i=0;i<num.length;i++)
sum+=num[i];

callback(sum)
}

calculateSum([2,4,6,9],mySum)