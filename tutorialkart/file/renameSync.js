const fs = require('fs');

fs.renameSync('sample.txt', 'sample_old.txt');
console.log('File Renamed');
