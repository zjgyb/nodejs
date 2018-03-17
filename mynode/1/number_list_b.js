var http = require('http');
var fs = require('fs');

function writeNumbers(res) {
    // var count = 0; 证明var很重要
    count = 0;
    for (let i = 0; i < 100; i++) {
        count++;
        res.write(count.toString() + '\n');
    }
}

http.createServer(function (req, res) {
    var query = require('url').parse(req.url).query;
    // var app = ~; 证明var很重要，重新打开打不开
    app = require('querystring').parse(query).file + ".txt";
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    writeNumbers(res);
    setTimeout(() => {
        console.log('opening ' + app);
        fs.readFile(app, 'utf-8', function (err, data) {
            if (err) {
                res.write('Could not find open file for reading\n');
            } else {
                res.write(data);
            }
            res.end();
        })
    }, 2000);
}).listen(456);

console.log('Server running at 456');
// 打开时带有查询字段 例如 `localhost:456/?file=main` 打开的就是main.txt文件