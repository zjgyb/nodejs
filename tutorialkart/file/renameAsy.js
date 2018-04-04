const fs = require('fs');

fs.rename('sample_old.txt', 'sample.txt',
    err => {
        if(err) {
            throw err;
        }
        console.log("File Renamed");
        
    }
)