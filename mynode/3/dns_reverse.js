var dns = require('dns');
// 给定IP，有些IP不能返回一组域名
dns.reverse('173.255.206.103', (err, domains) => {
    domains.forEach((domain) => {
        console.log(domain);
    });
})
