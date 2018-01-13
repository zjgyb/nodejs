var http = require('http');
// var date = require('./new_date.js');
// var hello = require('./hello.js');
var fs = require('fs');

http.createServer(function(req, res) {
	fs.readFile('index.html', function(err,data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		// res.write(req.url);
		// res.write("The date and time:" + date.myDateTime());
		// res.write(hello.hellogyb());
		res.end();
	});
}).listen(456);

// 创建一个新文件夹名字为mynewfile.txt 内容为Hello content
// fs.writeFile('mynewfile.txt', 'Hello content', function(err) {
// 	if(err) throw err;
// 	console.log('Saved!!');
// 	// 向文件夹中追加文本，如果文件不存在，文件将被创建
// 	fs.appendFile('mynewfile.txt', ' This is my text', function(err) {
// 		if(err) throw err;
// 		console.log('New text');
// 	});
// });

// 'w'意味着指定的文件写入
// fs.open('mysecondfile.txt', 'w', function(err, file) {
// 	if(err) throw err;
// 	console.log('Save');
// });

// 删除文件
/*fs.unlink('mysecondfile.txt', function(err) {
	if(err) throw err;
	console.log('This file is delete!');
});*/

// fs.rename('mynewfile.txt', 'myfile.txt', function(err) {
// 	if(err) throw err;
// 	console.log('The file is rename!');
// });