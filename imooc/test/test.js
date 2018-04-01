// 测试失败
var https = require('https');
var querystring = require('querystring');

var postData = querystring.stringify({
    // 看forData里的数据
    'thread': 6487193686,
    'message': 'nodejs test',
    'api_key': 'E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F'
})

var options = {
    hostname: 'disqus.com',
    port: 1080,
    path: '/api/3.0/posts/create.json',
    method: 'POST',
    // 取到request header里的东西
    headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en,zh-CN;q=0.9,zh;q=0.8,en-US;q=0.7,en-GB;q=0.6',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'disqus_unique=66bq8mg1n8ulgs; G_ENABLED_IDPS=google; hubspotutk=7fc6f74f43da2e1e705bd8eeb33f1ba4; ajs_user_id=%22274903263%22; ajs_anonymous_id=%22e0cb692f-e2b7-4ac5-99b3-fd46f80210b3%22; ajs_group_id=%224036157%22; __hstc=40641725.7fc6f74f43da2e1e705bd8eeb33f1ba4.1518850203464.1518850203464.1519029243033.2; mp_17b27902cd9da8972af8a3c43850fa5f_mixpanel=%7B%22distinct_id%22%3A%20274903263%2C%22authenticated%22%3A%20false%2C%22forum%22%3A%20null%2C%22current_path%22%3A%20%22%2Fprofile%2Flogin%2F%22%2C%22current_canonical_path%22%3A%20%22%2Fprofile%2Flogin%2F%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdisqus.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22disqus.com%22%2C%22user_id%22%3A%20274903263%2C%22mp_name_tag%22%3A%20274903263%7D; mp_mixpanel__c=4; csrftoken=gVvEEB6bPoR0yXdH5R60DZYYbJ5qWEJ5; disqusauth="1|zjgyb|0|1|0||274903263|https%3A//c.disquscdn.com/uploads/users/27490/3263/avatar32.jpg%3F1514080737|3"; sessionid=e84616d2-34ba-11e8-92e4-002590f30436; sudo=C61OOm10LN0n; __utma=40641725.1157849618.1522485303.1522485303.1522485303.1; __utmc=40641725; __utmz=40641725.1522485303.1.1.utmcsr=zjgyb.github.io|utmccn=(referral)|utmcmd=referral|utmcct=/2018-02-18-function/; __utmt=1; __utmb=40641725.2.9.1522485303; __jid=28iicsg1m0ccho',
        'Host': 'disqus.com',
        'Origin': 'https://disqus.com',
        'Referer': 'https://disqus.com/embed/comments/?base=default&f=zjgyb-github-io&t_u=https%3A%2F%2Fzjgyb.github.io%2F2018-02-18-function%2F&t_d=%E5%87%BD%E6%95%B0%E6%8B%93%E5%B1%95&t_t=%E5%87%BD%E6%95%B0%E6%8B%93%E5%B1%95&s_o=default',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = https.request(options, (res) => {
    console.log('Status: ' + res.statusCode);
    console.log('Headers: ' + JSON.stringify(res.headers));
    res.on('data', (chunk) => {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end', () => {
        console.log('评论完毕！');
    })
})

req.on('error', (e) => {
    console.log('Error: ' + e.message);
})

req.write(postData);
req.end();
