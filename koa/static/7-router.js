const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    if(ctx.request.path !== '/') {
        ctx.response.type = 'html';
        ctx.response.body = '<a href="./">Index</a>';
       
    } else {
        ctx.response.body = 'Hello World!';
    }
});

app.listen(3000);