<template>
    <div id="admin">
        <div class="admin-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div class="admin-quit" @click="quit">
            注销
        </div>
        <div class="admin-title">
            <h1>{{user.nick}}</h1>
            <img :src="user.headSrc">
            <i></i>
        </div>
        <div class="admin-infor">
            <div>
                <span>地址</span>
                <span>{{user.address}}</span>
            </div>
            <div>
                <span>余额</span>
                <span>￥{{user.account}}</span>
            </div>
        </div>
        <div class="admin-order">
            <span @click="getOrders(1)" :class="{order:true,goodActive:isActive === 1}">
                <i class="icon iconfont icon-daifahuo"></i>
                当前订单
            </span>
            <span @click="getOrders(2)" :class="{order:true,goodActive:isActive === 2}">
                <i class="icon iconfont icon-quanbudingdan"></i>
                待评价订单
            </span>
            <span @click="getOrders(3)" :class="{order:true,goodActive:isActive === 3}">
                <i class="icon iconfont icon-quanbudingdan"></i>
                完成订单
            </span>
        </div>
        <div class="block"></div>
        <div class="admin-order-content">
            <ul>
                <li v-for="(order,index) in orders" :key="index">
                    <span>{{order.orderTime}}</span>
                    <span>￥{{order.price}}</span>
                    <span v-if="order.orderType === 1" @click="confirmOrder(order.orderId)">确认送达</span>
                    <span v-else-if="order.orderType === 2">
                        <router-link :to="{path:'/rate',query: {id:order.orderId}}">评价</router-link>
                    </span>
                    <span v-else>已评价</span>
                </li>
            </ul>
        </div>
    </div>
</template>ss
<script>
   
    export default {
        data() {
            return {
                orders: [],
                user:{},
                isActive: 1,
            }
        },
        methods: {
            goBack: function() {
                this.$router.push({
                    path: '/shop/order'
                });
            },
            quit: function() {
                this.$store.dispatch('changeLoginState');
                this.$router.push({
                    path: '/login'
                });
            },
            getUserInfo: function() {
                this.api.getUser()
                    .then(res => {
                        if (res.data.status) {
                            this.user = res.data.data;
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            getOrders: function(type) {
                this.isActive = type;
                this.api.getOrders(type)
                    .then(res => {
                        if (res.data.status) {
                            this.orders = res.data.data;
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            confirmOrder: function(orderId) {
                this.api.confirmOrder(orderId)
                    .then(res => {
                        if (res.data.status) {
                            this.$message({
                                message: res.data.data,
                                type: 'success'
                            });
                            this.getOrders(2);
                        } else {
                            this.$message({
                                message: res.data.data,
                                type: 'warning'
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        created: function() {
            this.getUserInfo();
            this.getOrders(1);
        }
    }
</script>
<style lang="less" scoped>
    #admin {
        .admin-back {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 20px;
        }
        .admin-quit {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 14px;
            color: #00a0dc;
        }
        .admin-title {
            padding: 50px 0px;
            text-align: center;
            background-color: #f3f5f7;
            border-bottom: 1px solid #ccc;
            h1 {
                margin-bottom: 10px;
            }
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
        .admin-infor {
            border-bottom: 1px solid #ccc;
            div {
                line-height: 40px;
                overflow: hidden;
                margin: 0px 18px;
                border-bottom: 1px solid #eee;
                span:first-of-type {
                    font-size: 14px;
                    float: left;
                }
                span:last-child {
                    font-size: 12px;
                    float: right;
                    color: #93999f;
                }
            }
            div:last-child {
                border-bottom: none;
            }
        }
        .admin-order {
            padding: 50px 20px;
            span {
                text-align: center;
                border-radius: 10px;
                margin-right: 20px;
                padding: 10px 0px;
                display: inline-block;
                font-size: 14px;
                width: 95px;
                height: 48px;
                i {
                    font-size: 24px;
                    display: block;
                    color: #f3f5f7;
                    margin-bottom: 5px;
                }
            }
            span:last-child {
                margin-right: 0px;
            }
            span:hover {
                background: #00a9dc;
            }
        }
        .admin-order-content {
            ul {
                li {
                    padding: 18px 0px;
                    margin: 0px 18px;
                    border-bottom: 1px solid #ccc;
                    font-size: 14px;
                    span {
                        display: inline-block;
                    }
                    span:first-child {
                        width: 180px;
                        color: #93999f;
                        font-size: 12px;
                    }
                    span:nth-of-type(2) {
                        width: 50px;
                        color: #f01414;
                    }
                    span:last-child {
                        width: 100px;
                        color: #00a0dc;
                        text-align: center;
                    }
                    a {
                        color: #00a0dc;
                    }
                }
            }
        }
    }
</style>
