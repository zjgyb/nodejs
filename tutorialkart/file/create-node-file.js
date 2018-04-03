var fs = require('fs');
fs.writeFile('newfile.txt', 'Learn Node FS module', err => {
    if(err) throw err;
    console.log('File is created successful.');
})