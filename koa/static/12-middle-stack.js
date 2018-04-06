const Koa = require('koa');
const app = new Koa();

const one = (ctx, next) => {
    console.log('>>one');
    next();
    console.log('<<one');
}

const two = (ctx, next) => {
    console.log('>>two');
    // 若注释掉next()，那么就会出现 >>one >>two <<two <<one
    next();
    console.log('<<two');
}

const three = (ctx, next) => {
    console.log('>>three');
    next();
    console.log('<<three');
}

app.use(one);
app.use(two);
app.use(three);

app.listen(3000);