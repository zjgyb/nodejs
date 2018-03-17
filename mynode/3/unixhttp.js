// 基于unix套接字的HTTP服务器
var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    let query = require('url').parse(req.url).query;
    console.log(query);
    file = require('querystring').parse(query).file;

    res.writeHead(200, {'Content-Type': 'text/plain'});
    for (let i = 0; i < 100; i++) {
        res.write(i + '\n');
    }
    var data = fs.readFileSync(file, 'utf8');
    res.write(data);
    res.end();
}).listen('/...');