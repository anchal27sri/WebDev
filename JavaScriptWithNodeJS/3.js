// blocking and non blocking code
// synchronous code: blocking
// asynchronous code: non blocking, callbacks will be there
const fs = require("fs");
fs.readFile("dele.txt","utf-8",(err, data) => {console.log(data)});
console.log('This is a message');
