var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    mime = require('mime-types'),
    base = './index.html';

http.createServer((req, res) => {
    pathname = base + req.url;
    console.log(pathname);
    // path.exists已弃用
    fs.stat(pathname, (err, stats) => {
        if (err) {
            res.writeHead(404);
            res.write('Bad request 404\n');
            res.end();
        } else if(stats.isFile()) {
            var type = mime.lookup(pathname);
            console.log(type);
            res.setHeader('Content-Type', type);
            // res.setHeader('Content-Type', '/html');  // 不是"text/html"会变成下载
            res.statusCode = 200;
            var file = fs.createReadStream(pathname);
            file.on("open", () => {
                file.pipe(res);
            });
            file.on("error", (err) => {
                console.log(err);
            })
        } else {
            res.writeHead(403);
            res.write('forbidden');
            res.end();
        }
    })
}).listen(456);
console.log('Server running at 456');

