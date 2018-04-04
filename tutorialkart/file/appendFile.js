var fs = require('fs');
var data = "blabla";
fs.appendFile('newfile_2.txt', 'Learn Node FS module', err => {
    if (err) {
        throw err;
    }
    console.log('File is created successful.');
})

fs.appendFile('newfile_2.txt', data, err => {
    if (err) {
        throw err;
    }
    console.log('File is created successful.');
})