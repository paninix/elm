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
            this.userCache.getUser({
                success: res => this.user = res
            })
        },
        getOrders: function(type) {
            this.isActive = type;
            this.userCache.getOrders({
                data: type,
                success: res => this.orders = res
            })
        },
        confirmOrder: function(orderId) {
            this.userCache.confirmOrder({
                success: res => {
                    this.$message({
                        message: res.data.data,
                        type: 'success'
                    });
                    this.getOrders('2');
                },
                fail: res => {
                    this.$message({
                        message: res.data.data,
                        type: 'warning'
                    });
                }
            })
        }
    },
    created: function() {
        this.userCache = new UserCache()
        this.getUserInfo();
        this.getOrders('1');
    }
})