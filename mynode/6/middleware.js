// 中间件将自己插入应用程序和底层系统的通信链中
var connect = require('connect');
var http = require('http');

var app = connect()
    .use(connect.favicon())
    .use(connect.logger())
    .use((req, res) => {
        res.end('Hello World\n');
    });
http.createServer(app).listen(456);