<template>
    <div id="rate">
        <h2>你的五星好评是我进步的动力</h2>
        <el-row>
            <el-col :span=8>
                <span>星级</span>
            </el-col>
            <el-col :span=12 :offset=4>
                <el-rate v-model="rating.score" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span=8>
                <span style="line-height:28px">送达时间</span>
            </el-col>
            <el-col :span=12 :offset=4>
                <el-input v-model="rating.deliveryTime" size="mini"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="给个五星好评哦" v-model="rating.text">
            </el-input>
        </el-row>
        <el-button type="primary" @click="submitRating">提交评价</el-button>
    </div>
</template>
<script>
    
    export default {
        data() {
            return {
                rating: {
                    orderId: 0,
                    score: 5,
                    deliveryTime: 30,
                    text: '',
                    rateTime: 0,
                    rateType: 0,
                }
            }
        },
        methods: {
            submitRating:function() {
                this.rating.rateTime = new Date().getTime();
                this.rating.rateType = this.rating.score >= 3? 1:-1;
                this.api.submitRating(JSON.stringify(this.rating))
                    .then(res => {
                        if (res.data.status) {
                            this.$message({
                                message: res.data.data,
                                type: 'success'
                            });
                            this.$router.push({path:'/shop/rating'});
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
        created: function(){
            this.rating.orderId = this.$route.query.id;
        }
    }
</script>
<style lang="less" scoped>
    #rate {
        padding: 100px 50px;
        h2 {
            line-height: 48px;
            margin-bottom: 50px;
            text-align: center;
        }
        .el-row {
            padding: 18px 0px;
            border-bottom: 1px solid #eee;
            font-size: 14px;
        }
    }
</style>


