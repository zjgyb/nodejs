var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html',
        (err, data) => {
            if(err) throw err;
            res.writeHead(200);
            res.write(data.toString('utf8'));
            return res.end();
        }
    )
}).listen(456);
// fs.readFile('index.html',
//     (err, data) => {
//         fs
//     }
// )