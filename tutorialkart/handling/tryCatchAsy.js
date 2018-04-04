const fs = require('fs');

try {
    var data = fs.readFileSync('sample.html');
} catch(err) {
    console.log(err);
}

console.log("Continuing with other statements..");
