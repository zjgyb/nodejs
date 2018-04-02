const fs = require('fs');

fs.rename('sample.txt', 'sample_old.txt',
    err => {
        if(err) throw err;
        console.log('File Renamed.');
        fs.unlink('sample_old.txt',
            err => {
                if(err) throw err;
                console.log('File Deleted.');
            }
        );
    }
);