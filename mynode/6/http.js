var http = require('http'),
    path = require('path'),
      fs = require('fs'),
    base = './index.html';

http.createServer((req, res) => {
    pathname = base + req.url;
    console.log(pathname);
    // path.exists已弃用
    fs.exists(pathname, (exists) => {
        if(exists) {
            res.setHeader('Content-Type', 'text/html');
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
            res.writeHead(404);
            res.write('Bad request 404\n');
            res.end();
        }
    })
}).listen(456);
console.log('Server running at 456');

// 找不到图片目录