const fs = require('fs');

fs.unlink('sample.txt',
    err => {
        console.log('File deleted!');
        
    }
)
