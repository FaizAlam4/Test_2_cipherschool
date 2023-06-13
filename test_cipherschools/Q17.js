// Question: Create a JavaScript function getUserData that simulates fetching user data from a server asynchronously. The function takes a callback function callback as an argument. Inside the getUserData function, after a delay of 2 seconds, invoke the callback function with a mock user object containing name, email, and age properties.
// Example Input: getUserData(callback);


// Expected Output:User Data:
// {
//   name: 'John Doe',
//   email: 'johndoe@example.com',
//   age: 25
// }


function func(obj){
console.log(obj);
}

function getUserData(callback){
    let obj={
        name:"Faiz",
        email:"faiz@gmail.com",
        age:22
    }
callback(obj)
}

getUserData(func)