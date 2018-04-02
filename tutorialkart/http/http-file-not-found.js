const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    var filePath = req.url.substring(1);
    fs.readFile(filePath,
        (err, data) => {
            if(err) {
                res.writeHead(302, {"Location": "http://" + req.headers['host'] + '/page-b.html'});
                return res.end();
            }
            res.writeHead(200);
            res.write(data.toString('utf8'));
            return res.end();
        }
    )
}).listen(456);