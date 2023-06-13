// Question: Write a JavaScript function getRandomNumber that generates a random number between 1 and 10. Implement a promise that resolves with the generated random number. The promise should be rejected if the generated number is less than 5.
// Example Input:getRandomNumber()
// Expected Output:



function getRandomNumber(){

    return new Promise((resolve,reject)=>{

      let  ans=Math.floor((Math.random()*10)+1);
      console.log(ans);

      if(ans<5)
      reject("Number less than 5");
      else
      resolve("Success");
    })
}

let pro=getRandomNumber();


pro.then((data)=>{
    console.log(data)
}).catch((err)=>console.log(err))



