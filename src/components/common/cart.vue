<template>
    <div id="cart">
        <div class="cart-top" v-show="isShowCart">
            <div>
                <span>购物车</span>
                <span @click="cleanCart">清空</span>
            </div>
            <ul>
                <li v-for="(food,index) in cartFoods" :key="index">
                    <h3>{{food.name}}</h3>
                    <span>￥{{food.total}}</span>
                    <span>
                            <i class="icon iconfont icon-jian" @click="subFood(food)"></i>
                            &nbsp;{{food.count}}&nbsp;
                            <i class="icon iconfont icon-jia" @click="addFood(food)"></i>
                        </span>
                </li>
            </ul>
        </div>
        <div class="cart-bottom">
            <div class="cart-left">
                <i class="icon iconfont icon-31gouwuche" v-if="totalMoney <= 0" @click="isShowCart = !isShowCart"></i>
                <i class="icon iconfont icon-31gouwuchexuanzhong" v-else @click="isShowCart = !isShowCart"></i>
                <span>￥{{totalMoney}}</span>
                <span>另需配送费 ￥4元</span>
            </div>
            <div class="cart-right" v-if="shortMoney > 0">
                <span>还差 ￥{{shortMoney}}元 起送</span>
            </div>
            <div class="cart-right" v-else style="backgroundColor:#00b43c;color:#fff">
                <span><router-link to="/account">去结算</router-link></span>
            </div>
        </div>
        <div class="cart-mask" v-show="isShowCart"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isShowCart: false,
                leastMoney: 40,
            }
        },
        computed: {
            cartFoods() {
                return this.$store.getters.getCart;
            },
            totalMoney() {
                return this.$store.getters.getTotal;
            },
            shortMoney() {
                return this.leastMoney - this.$store.getters.getTotal;
            }
        },
        methods: {
            addFood: function(food) {
                this.$store.dispatch("addOrder", food);
            },
            subFood: function(food) {
                this.$store.dispatch("subOrder", food);
            },
            cleanCart: function(){
                this.$store.dispatch("cleanOrder");     
            }
        }
    }
</script>
<style lang="less" scoped>
    #cart {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 48px;
        z-index: 50;
        .cart-bottom {
            position: relative;
            z-index: 2;
            height: 50px;
            line-height: 50px;
            background-color: #141d27;
            color: hsla(0, 0%, 100%, .4);
            .cart-left {
                float: left;
                width: 70%;
                i {
                    font-size: 24px;
                    margin: 0px 12px;
                }
                span {
                    margin-right: 10px;
                }
            }
            .cart-right {
                float: right;
                width: 30%;
                background: #2b343c;
                text-align: center;
                font-size: 12px;
                font-weight: 700;
                a {
                    color: #fff;
                }
            }
        }
        .cart-top {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: #fff;
            transform: translate3d(0, -100%, 0);
            z-index: 2;
            div {
                height: 40px;
                line-height: 40px;
                background: #f3f5f7;
                border-bottom: 1px solid rgba(7, 17, 27, .1);
                padding: 0px 18px;
                span:first-of-type {
                    font-size: 14px;
                    font-weight: 200;
                    color: #07111b;
                }
                span:last-child {
                    position: absolute;
                    right: 8px;
                    font-size: 12px;
                    color: #00a0dc;
                    padding: 0 10px;
                }
            }
            ul {
                background-color: #fff;
                li {
                    height: 48px;
                    line-height: 48px;
                    margin: 0 18px;
                    border-bottom: 1px solid rgba(7, 17, 27, .1);
                    h3 {
                        display: inline-block;
                        font-size: 14px;
                        width: 50%;
                    }
                    span:first-of-type {
                        color: #f01414;
                        display: inline-block;
                        width: 30%;
                    }
                    span:last-child {
                        font-size: 12px;
                        color: #93999f;
                        i {
                            font-size: 12px;
                        }
                    }
                }
                li:last-child {
                    border-bottom: none;
                }
            }
        }
        .cart-mask {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(7, 17, 27, .6);
            z-index: 1;
        }
    }
</style>

