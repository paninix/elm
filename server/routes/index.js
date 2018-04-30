const Router = require('koa-router');
const router = new Router();

const good = require('./good.js');
const user = require('./user.js');
const seller = require('./seller.js');


module.exports = function (app) {
    //路由表
    app.use(router.routes()).use(router.allowedMethods());

    router.use('/api/elm/good', good.routes(), good.allowedMethods());
    router.use('/api/elm/user', user.routes(), user.allowedMethods());
    router.use('/api/elm/seller', seller.routes(), seller.allowedMethods());
}


