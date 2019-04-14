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
            UserCache.userLogin(this.user)
            .then((res)=>{
                this.$store.dispatch('changeLoginState');
                this.$message({
                    message: res,
                    type: 'success'
                });
                this.$router.push('/shop/order');
            }).catch((err)=>{
                this.$message.error(err);
            });
        }
    }
})