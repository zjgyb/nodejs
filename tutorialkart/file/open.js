var fs = require('fs');

fs.appendFile('newfile_3.txt', 'w', (err, file) => {
    if (err) {
        throw err;
    }
    console.log('File is created successful.');
});