// 爬一个网页源码
var http = require('http');
var url = 'http://202.206.223.102/';

http.get(url, (res) => {
    var html = '';
    res.on('data', (data) => {
        html += data;
    })
    res.on('end', () => {
        console.log(html);
    })
}).on('error', () => {
    console.log('获取课程数据出错');
})