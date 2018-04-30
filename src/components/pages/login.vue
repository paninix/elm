<template>
    <div id="login">
        <h1>饿了么</h1>
        <div>饿了就上饿了么！</div>
        <el-form ref="form" :model="user" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {
                    username: 'admin',
                    password: '1111',
                }
            }
        },
        methods: {
            login: function() {
                this.api.userLogin(this.user)
                    .then(res => {
                        if (res.data.status) {
                            this.$store.dispatch('changeLoginState');
                            this.$message({
                                message: res.data.data,
                                type: 'success'
                            });
                            this.$router.push('/shop/order');
                        } else {
                            this.$message.error(res.data.data);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
</script>
<style lang="less" scoped>
    #login {
        padding: 150px 0px 250px;
        background-color: #00a0dc;
        text-align: center;
        color: #fff;
        h1 {
            font-size: 28px;
            margin-bottom: 20px;
        }
        .el-form {
            margin-right: 20px;
            margin-top: 50px;
            .el-button {
                width: 100%;
            }
        }
    }
</style>

