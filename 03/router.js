var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

//context=ctx
router.get('/', async (ctx, next) => {
    ctx.body = 'home page';       //res.writeHead() ,res.send()
}).get('/news', async (ctx) => {
    ctx.body = 'news page';
});

app
    .use(router.routes())           //启动路由
    .use(router.allowedMethods());  //

app.listen(3000);
