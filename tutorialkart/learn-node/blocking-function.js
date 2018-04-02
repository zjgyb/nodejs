const fs = require('fs');
const data = fs.readFileSync('sample.txt');

console.log("Reading file completed: " + new Date().toISOString());
console.log("After readFileSync statement: " + new Date().toISOString());