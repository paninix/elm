import Base from '@/base/base.vue'

import UserCache from '@/axios/user/cache'
export default Base.extend({
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
            this.userCache.userLogin({
                data: this.user,
                success: res => {
                    this.$store.dispatch('changeLoginState');
                    this.$message({
                        message: res,
                        type: 'success'
                    });
                    this.$router.push('/shop/order');
                },
                fail: err => {
                    this.$message.error(err);
                }
            })
        }
    },
    created() {
        this.userCache = new UserCache()
    }
})