<template>
    <div id="shop">
        <div class="shop-title">
            <el-rate v-model="seller.foodScore" disabled>
            </el-rate>
            <h1>{{seller.name}}</h1>
            <span>({{seller.ratingCount}}) 月售{{seller.sellCount}}单</span>
        </div>
        <div class="shop-intro">
            <el-row>
                <el-col :span="8">
                    <div>起送价</div>
                    <span>{{seller.minPrice}}</span>元
                </el-col>
                <el-col :span="8">
                    <div>商家配送</div>
                    <span>{{seller.deliveryPrice}}</span>元
                </el-col>
                <el-col :span="8">
                    <div>平均配送时间</div>
                    <span>{{seller.deliveryTime}}</span>分钟
                </el-col>
            </el-row>
        </div>
        <div class="block"></div>
        <div class="shop-public">
            <h2>公告与活动</h2>
            <p>{{seller.bulletin}}</p>
            <ul>
                <li v-for="(support,index) in seller.supports" :key="index">
                    <i class="icon iconfont icon-zhengpinbaozhang"></i>
                    <span>{{support.description}}</span>
                </li>
            </ul>
        </div>
        <div class="block"></div>
        <div class="shop-img">
            <h2>商家实景</h2>
            <ul>
                <li v-for="(pic,index) in seller.pics" :key="index">
                    <img :src="pic.picSrc">
                </li>
            </ul>
        </div>
        <div class="block"></div>
        <div class="shop-infor">
            <h2>商家信息</h2>
            <ul>
                <li v-for="(info,index) in seller.infos" :key="index">
                    <span>{{info.info}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                seller: {}
            }
        },
        methods: {
            getSeller: function() {
                this.api.getSellerAll()
                    .then(res => {
                        if(res.data.status){
                            this.seller = res.data.data;
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        created: function() {
            this.getSeller();
        }
    }
</script>
<style lang="less" scoped>
    #shop {
        .shop-title {
            padding: 18px 0px;
            margin: 0px 18px;
            border-bottom: 1px solid #ccc;
            h1 {
                display: inline-block;
                font-size: 14px;
                margin-top: 10px;
            }
            span {
                font-size: 12px;
                color: #4d555d;
            }
        }
        .shop-intro {
            text-align: center;
            padding: 18px 0px;
            font-size: 12px;
            color: #93999f;
            div {
                margin-bottom: 4px;
            }
            span {
                font-size: 24px;
                color: #000;
            }
        }
        .shop-public {
            padding-top: 18px;
            h2 {
                font-size: 14px;
                font-weight: normal;
                margin-left: 12px;
            }
            p {
                padding: 8px 12px 16px;
                font-size: 12px;
                font-weight: 200;
                color: #f01414;
                line-height: 24px;
            }
            ul {
                margin: 0px 18px;
            }
            li {
                padding: 16px;
                border-top: 1px solid #eee;
                font-size: 12px;
                font-weight: 200;
                color: #07111b;
                line-height: 16px;
                i {
                    margin-right: 2px;
                }
            }
        }
        .shop-img {
            padding: 18px;
            h2 {
                font-size: 14px;
                margin-bottom: 10px;
            }
            ul {
                overflow: hidden;
            }
            li {
                margin-right: 6px;
                float: left;
                img {
                    width: 78px;
                    height: 75px;
                }
            }
        }
        .shop-infor {
            padding: 18px;
            h2 {
                font-size: 14px;
                margin-bottom: 10px;
            }
            ul {
                margin: 0px 18px;
            }
            li {
                padding: 16px;
                border-top: 1px solid #eee;
                font-size: 12px;
                font-weight: 200;
                color: #07111b;
                line-height: 16px;
            }
        }
    }
</style>

