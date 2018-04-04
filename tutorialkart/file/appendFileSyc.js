const fs = require('fs');
let data = '\n dha jja';
fs.appendFileSync('sample.txt', data, 'utf8');
console.log('Data is appended to file successful.');