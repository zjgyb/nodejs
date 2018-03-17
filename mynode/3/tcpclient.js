// 创建TCP客户端
var net = require('net');
var client = new net.Socket();

client.setEncoding('utf8');
client.connect('80', 'localhost', () => {
    console.log('connected to server');
    client.write('Who needs a browser to communicate?');
});

process.stdin.resume();
process.stdin.on('data', (data) => {
    client.write(data);
});
client.on('data', (data) => {
    console.log(data);
});
client.on('close', () => {
    console.log('connection is closed');
});