var dns = require('dns');
dns.resolve('baidu.com', 'NS', (err, domains) => {
    domains.forEach((domain) => {
        console.log(domain);
    })
})