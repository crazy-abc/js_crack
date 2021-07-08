const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');

var crack = require("./crack.js");

app.use(bodyParser({
    formLimit:"10mb",
    jsonLimit:"10mb"
}))
router.post('/get_sign', async (ctx, next) => {
    var js = ctx.request.body.param;
    var time = ctx.request.body.time;

    var param = {
        data: JSON.stringify(eval("("+js+")"))
    }
    var sign = crack.get_sign(param,time);

    ctx.set("Content-Type", "application/json");
    ctx.response.body = JSON.stringify(sign);
});

app.use(router.routes());

app.listen(3000, () => {
    console.log('This server is running at http://localhost:' + 3000)
})