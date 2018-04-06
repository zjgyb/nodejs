const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = async ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./template.html');
    console.log(ctx.method);
    
    if (ctx.method == 'POST') {
        ctx.body = {'data': 'mes'};
    }
}

app.use(main);
app.listen(3000);