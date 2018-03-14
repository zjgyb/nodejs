var http = require('http'); // 通过外部程序或库提供的模块，我们称之为模块
// 创建一个服务器，两个参数一个代表服务器接收的请求，另一个代表服务器的响应
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	// 不在end里传递代码块
	// res.write("Hi\n"); 
	// res.end();
	res.end("Hello world!"); // 第二个参数默认编码值是utf-8
}).listen(456);

console.log("the function is end.");