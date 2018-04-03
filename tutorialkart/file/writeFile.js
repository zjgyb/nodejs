var fs = require('fs');
var data = "Hello !";

fs.writeFile('sample.txt', data, 
    (err) => {
        if(err) throw err;
        console.log("Data is written to file successfully");
    }
);
