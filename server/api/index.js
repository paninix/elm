const query = require('../db');


let status = {
    userId: 0, //当前登录用户ID
    sellerId: 0, //当前访问的商家ID
}


module.exports = {
    /***********用户API*****************/
    //用户登录校验
    userLogin: function (username) {
        return query(`SELECT * FROM user WHERE username = '${username}'`);
    },
    //用户ID全局化
    initUserId: function (userId) {
        status.userId = userId;
    },
    //获取用户基本信息
    getUserInfo: function () {
        return query(`SELECT * FROM userinfos WHERE userId = ${status.userId}`);
    },
    //获取用户订单信息
    getUserOrders: function (type) {
        let sql;
        if (type === '0') {
            sql = `SELECT * FROM orders WHERE userId = ${status.userId} ORDER BY orderTime DESC`;
        }
        else {
            sql = `SELECT * FROM orders WHERE orderType = ${type} AND userId = ${status.userId} ORDER BY orderTime DESC`;
        }
        return query(sql);
    },
    //扣除用户余额
    userAccountSub: function (account) {
        return query(`UPDATE userinfos SET account = ${account} WHERE userId = ${status.userId}`);
    },
    //用户确认收货
    userConfirmOrder: function (orderId) {
        return query(`UPDATE orders SET orderType = 2 WHERE orderId = ${orderId}`);
    },
    //用户完成评价
    userRatedOrder: function (orderId) {
        return query(`UPDATE orders SET orderType = 3 WHERE orderId = ${orderId}`);
    },
    //用户下单
    userSubmitOrder: function (order) {
        return query(`INSERT INTO orders(userId,sellerId,orderTime,price,orderType) VALUES(${status.userId},${status.sellerId},${order.orderTime},${order.price},1);`);
    },
    //用户评价
    userSubmitRating: function (rating) {

        return query(`INSERT INTO sellerratings (userId,sellerId,orderId,rateTime,deliveryTime,score,rateType,TEXT) VALUES(${status.userId},${status.sellerId},${rating.orderId},${rating.rateTime},${rating.deliveryTime},${rating.score},${rating.rateType},'${rating.text}');`);
    },
    /***********商品API*****************/
    //获取全部商品类型
    getGoodTypes: function () {
        return query(`SELECT * FROM foodtype`);
    },
    //获取某一类型的全部商品
    getGoodsByType: function (goodType) {
        return query(`SELECT * FROM food WHERE fTypeId = ${goodType}`);
    },
    //获取指定Id的某一商品
    getGoodByGoodId: function (goodId) {
        return query(`SELECT * FROM food WHERE foodId = ${goodId}`);
    },
    /***********商家API*****************/
    //商家ID全局化
    initSellerId: function (sellerId) {
        status.sellerId = sellerId;
    },
    //获取商家基本信息
    getSellerInfo: function () {
        return query(`SELECT * FROM seller`);
    },
    //获取商家优惠信息
    getSellerSupports: function () {
        return query(`SELECT * FROM sellersupports WHERE sellerId = ${status.sellerId}`);
    },
    //获取商家实景信息
    getSellerPics: function () {
        return query(`SELECT * FROM sellerpics WHERE sellerId = ${status.sellerId}`);
    },
    //获取商家介绍信息
    getSellerInfos: function () {
        return query(`SELECT * FROM sellerinfos WHERE sellerId = ${status.sellerId}`);
    },
    //获取商家评价信息
    getSellerRatings: function (type) {
        let sql;
        if (type === '0') {
            sql = `SELECT * FROM sellerratings WHERE sellerId = ${status.sellerId} ORDER BY rateTime DESC`;
        }
        else {
            sql = `SELECT * FROM sellerratings WHERE rateType = ${type} AND sellerId = ${status.sellerId} ORDER BY rateTime DESC`;
        }
        return query(sql);
    },
};


