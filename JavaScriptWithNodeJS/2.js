// built in modules
// modules: libraries
// we add modules here so that we can use libraries
// here we are using FileSystem modules.
const fs = require("fs");
let text = fs.readFileSync('dele.txt', 'utf-8');
text = text.replace("browserser","bingo");
console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("rohan.txt",text);