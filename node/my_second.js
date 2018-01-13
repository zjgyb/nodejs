var url = require('url');
var adr = 'http://localhost:456/index.html?year=2018&month=February';
var q = url.parse(adr, true);

console.log(q.host); // localhost:456
console.log(q.pathname); // /index.html
console.log(q.search); // ?year=2018&month=February

var qdata = q.query; // 返回一个对象
console.log(qdata.month); // February