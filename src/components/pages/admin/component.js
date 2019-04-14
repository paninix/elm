import Base from '@/base/base.vue'
import UserCache from '@/axios/user/cache'
export default Base.extend({
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
            UserCache.getUser()
            .then((res)=>{
                this.user = res;
            })
        },
        getOrders: function(type) {
            this.isActive = type;
            UserCache.getOrders(type)
            .then((res)=>{
                this.orders = res;
            })
        },
        confirmOrder: function(orderId) {
            UserCache.confirmOrder(orderId)
            .then((res)=>{
                this.$message({
                    message: res,
                    type: 'success'
                });
                this.getOrders('2');
            }).catch((err)=>{
                this.$message({
                    message: err,
                    type: 'warning'
                });
            });
        }
    },
    created: function() {
        this.getUserInfo();
        this.getOrders('1');
    }
})