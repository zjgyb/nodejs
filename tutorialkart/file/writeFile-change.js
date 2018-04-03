var fs = require('fs');
var data = "HELLO";

fs.writeFile('sample.txt', data, 'ascii',
    (err) => {
        if (err) throw err;
        console.log("Data is written to file successfully");
    }
);