import axios from 'axios';
import store from '../store';

let httpURL = "http://www.xuguobin.club/api/elm/" //这是我服务器的api接口
let localURL = 'http://localhost/api/elm/';     //这是本地koa2的api接口
axios.defaults.baseURL = localURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
    //获取商家基本信息
	getSeller() {
        return axios.get('seller/top');
    },
    //获取商家全部信息
    getSellerAll() {
        return axios.get('seller/all');
    },
    //获取商家全部评价
    getRatings(rateType) {
        return axios.get('seller/rating?type=' + rateType);
    },
    //获取用户信息
    getUser() {
        return axios.get('user/infor');
    },
    //获取订单
    getOrders(orderType) {
        return axios.get('user/order?type=' + orderType);
    },
    //提交订单
    submitOrder(order) {
        return axios.get('user/submit?order=' + order);
    },
    //确认收货
    confirmOrder(orderId) {
        return axios.get('user/confirm?orderId=' + orderId);
    },
    //提交评价
    submitRating(rating) {
        return axios.get('user/rating?rating=' + rating);
    },
    //用户登录
    userLogin(user) {
        return axios.post('user/login',`username=${user.username}&password=${user.password}`);
    },
    //获取全部商品
    getGoods() {
        return axios.get('good/all');
    },
    //获取商品信息
    getFood(foodId) {
        return axios.get('good/food?foodId=' + foodId);
    },
};