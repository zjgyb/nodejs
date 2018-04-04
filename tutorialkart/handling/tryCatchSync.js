const fs = require('fs');

// it is an error.
fs.readdirSync('sample.txt');

console.log('Continuing');
