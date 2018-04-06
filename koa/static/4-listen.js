const http = require('http');
const https = require('https');
const Koa = require('Koa');
const app = new Koa();

app.use(3000);
// 上面的是下面的语法糖
// 不过https没有用不知道为啥，可能需要证书
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
