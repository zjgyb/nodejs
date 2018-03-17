// 创建TCP服务器
var net = require('net');
var server = net.createServer((conn) => {
    console.log('conneted');
    conn.on('data', (data) => {
        console.log(data + ' from ' + conn.remoteAddress + ' ' + conn.remotePort);
        conn.write('Repeating: ' + data);
    });
    conn.on('close', () => {
        console.log('client closed connention');
    });
}).listen(456);

console.log('listening on port 456');