<template>
    <div id="account">
        <div class="account-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div class="account-address">
            <div>{{user.address}}</div>
            <span>{{user.phone}}</span>
        </div>
        <div class="block"></div>
        <div class="account-food">
            <div class="account-food-shop">
                <div>
                    <img :src="seller.avatar">
                </div>
                <span>{{seller.name}}</span>
            </div>
            <ul>
                <li v-for="(food,index) in orderFood" :key="index">
                    <img :src="food.image">
                    <span>{{food.name}}</span>
                    <span>× {{food.count}}</span>
                    <span>￥{{food.total}}</span>
                </li>
            </ul>
        </div>
        <div class="block"></div>
        <div class="account-content">
            <div>
                <span>备注</span>
                <span>口味，偏好等要求</span>
            </div>
            <div>
                <span>餐具数量</span>
                <span>未选择</span>
            </div>
            <div>
                <span>发票</span>
                <span>该商家不支持开发票</span>
            </div>
            <div>
                <span>满减优惠</span>
                <span>满28减5</span>
            </div>
        </div>
        <div class="account-pay">
            <span>合计 ￥{{payMoney}}</span>
            <span @click="submitOrder">提交订单</span>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                user: {},
                seller: {}
            }
        },
        computed: {
            orderFood: function() {
                return this.$store.getters.getCart;
            },
            payMoney: function() {
                if (this.$store.getters.getTotal > 28)
                    return this.$store.getters.getTotal - 5 + this.seller.deliveryPrice;
                else
                    return this.$store.getters.getTotal + this.seller.deliveryPrice;
            }
        },
        methods: {
            goBack: function() {
                this.$router.push({
                    path: '/shop/order'
                });
            },
            submitOrder: function() {
                let order = {
                    'orderTime': new Date().getTime(),
                    'orderType': 1,
                    'price': this.payMoney,
                };
                this.api.submitOrder(JSON.stringify(order))
                    .then(res => {
                        if (res.data.status) {
                            this.$message({
                                message: res.data.data,
                                type: 'success'
                            });
                            this.$router.push('/admin');
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
            },
            getUSer: function() {
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
            getSeller: function() {
                this.api.getSeller()
                    .then(res => {
                        if (res.data.status) {
                            this.seller = res.data.data;
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        created: function() {
            this.getUSer();
            this.getSeller();
        }
    }
</script>
<style lang="less" scoped>
    #account {
        .account-back {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 20px;
        }
        .account-address {
            padding: 20px 0px;
            text-align: center;
            div {
                margin-bottom: 5px;
                font-size: 14px;
                font-weight: 200;
            }
            span {
                font-size: 12px;
                color: #00a0dc;
            }
        }
        .account-food {
            .account-food-shop {
                padding: 10px;
                overflow: hidden;
                div {
                    float: left;
                    margin-right: 5px;
                    img {
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                    }
                }
                span {
                    float: left;
                    font-size: 14px;
                    line-height: 24px;
                }
            }
            ul {
                border-top: 1px solid #ccc;
                padding: 10px;
                li {
                    overflow: hidden;
                    line-height: 50px;
                    border-bottom: 1px solid #ccc;
                    font-size: 14px;
                    img {
                        float: left;
                        width: 50px;
                        height: 50px;
                        margin-right: 10px;
                    }
                    span:nth-of-type(1) {
                        float: left;
                        width: 40%;
                        font-weight: 300;
                        font-size: 12px;
                    }
                    span:nth-of-type(2) {
                        float: left;
                        color: #00a0dc;
                    }
                    span:nth-of-type(3) {
                        float: right;
                        color: #f01414;
                    }
                }
                li:last-child {
                    border-bottom: none;
                }
            }
        }
        .account-content {
            div {
                line-height: 40px;
                overflow: hidden;
                margin: 0px 18px;
                border-bottom: 1px solid #ccc;
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
        }
        .account-pay {
            position: fixed;
            width: 100%;
            bottom: 0px;
            left: 0px;
            font-size: 14px;
            line-height: 48px;
            span:first-of-type {
                float: left;
                padding-left: 5%;
                width: 65%;
                background-color: #000;
                color: #fff;
            }
            span:last-child {
                text-align: center;
                font-weight: 600;
                float: right;
                width: 30%;
                background-color: #e6a23c;
            }
        }
    }
</style>


