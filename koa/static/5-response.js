const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    if(ctx.request.accepts('xml')) {
        // ctx.type 与 ctx.response.type的区别？
        ctx.response.type = 'xml';
        ctx.response.body = '<data>Hello World</data>';
    } else if (ctx.resquest.accepts('json')) {
        ctx.response.type = 'json';
        ctx.response.body = {data: 'Hello World'};
    } else if (ctx.resquest.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>Hello World</p>';
    } else {
        ctx.response.type = 'text';
        ctx.response.body = 'Hello World';
    }
});

app.listen(3000);