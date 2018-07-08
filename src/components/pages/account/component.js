import Base from '@/base/base.vue'
import UserCache from '@/axios/user/cache'
import SellerCache from '@/axios/seller/cache'

export default Base.extend({
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
            this.userCache.submitOrder({
                data:JSON.stringify(order),
                success: res => {
                    this.$message({
                        message: res,
                        type: 'success'
                    });
                    this.$router.push('/admin');
                },
                fail: err => {
                    this.$message({
                        message: err,
                        type: 'warning'
                    });
                }
            })
        },
        getUSer: function() {
            this.userCache.getUser({
                success: res => this.user = res
            })
        },
        getSeller: function() {
            this.sellerCache.getSeller({
                success: res => this.seller = res
            })
        }
    },
    created: function() {
        this.userCache = new UserCache()
        this.sellerCache = new SellerCache()
        this.getUSer();
        this.getSeller();
    }
})