// may not be of great use
const fs = require('fs');

fs.printMessage = str => {
    console.log("Message from newly added function to the module");
    console.log(str);
}

module.exports = fs;

fs.printMessage('Success');