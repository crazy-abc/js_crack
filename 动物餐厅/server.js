const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');

var crack = require("./crack.js");

app.use(bodyParser({
    formLimit: "10mb",
    jsonLimit: "10mb"
}))

router.post('/get_openid', async (ctx, next) => {
    var openid = ctx.request.body.openid;

    var res = crack.get_openid(openid);

    console.log(res)
    ctx.set("Content-Type", "application/json");
    ctx.response.body = JSON.stringify({"openid": res});
});

router.get('/get_code', async (ctx, next) => {

    var res = crack.get_code();

    ctx.set("Content-Type", "application/json");
    ctx.response.body = JSON.stringify({"code": res});
});

router.post('/get_checksign', async (ctx, next) => {
    var openid = ctx.request.body.openid;
    var record = ctx.request.body.record;

    test = JSON.parse(record)

    res = crack.get_checkSign2(JSON.parse(record), openid)

    ctx.set("Content-Type", "application/json");
    ctx.response.body = JSON.stringify({"sign": res});
});

app.use(router.routes());

app.listen(3000, () => {
    console.log('This server is running at http://localhost:' + 3000)
})