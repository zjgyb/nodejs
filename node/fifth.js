// 打开文件事件
/*var fs = require('fs');
var rs = fs.createReadStream('./mynewfile.txt');
rs.on('open', function() {
	console.log('The file is open');
});*/

// event内置模块
var events = require('events');
// EventEmitter对象，配合emit使用
var eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
	console.log('Hello world');
}

eventEmitter.on('hello', myEventHandler);
eventEmitter.emit('hello');