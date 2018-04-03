var fs = require('fs');

fs.appendFile('newfile_2.txt', 'Learn Node FS module', err => {
    if (err) {
        throw err;
    }
    console.log('File is created successful.');
})