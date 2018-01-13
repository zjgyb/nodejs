var http = require('http');
var uc = require('upper-case'); // 把字符转成大写

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(uc('Hello World!'));
	res.end();
}).listen(8080);