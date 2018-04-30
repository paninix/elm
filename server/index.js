const Koa = require('koa');
const Static = require('koa-static');
const BodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const path = require('path');

const routes = require('./routes');
const app = new Koa();

//跨域
app.use(cors({
    origin: function (ctx) {
        return "*"; // 允许来自所有域名请求
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));


//post解析
app.use(BodyParser());

routes(app);

//黑洞路由
app.use(Static(path.join(__dirname,'./static/')));

//端口监听
app.listen(80);