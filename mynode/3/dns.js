var dns = require('dns');
// 解析一个域名的dns
dns.lookup('baidu.com', (err, ip) => {
    if(err) {
        throw err;
    }
    console.log(ip);
})