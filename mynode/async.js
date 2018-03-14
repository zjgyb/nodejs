var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('hello_world.js', 'utf-8', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        if (err) {
            res.write('Could not find or open file for reading\n');
        } else {
            res.write(data);
        }
        res.end();
    });
}).listen(456, function() {
    console.log('456');
});

console.log('start');

// start 456