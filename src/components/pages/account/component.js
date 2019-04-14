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
            UserCache.submitOrder(JSON.stringify(order))
            .then((res)=>{
                this.$message({
                    message: res,
                    type: 'success'
                });
                this.$router.push('/admin');
            }).catch((err)=>{
                this.$message({
                    message: err,
                    type: 'warning'
                });
            });
        },
        getUSer: function() {
            UserCache.getUser()
            .then((res)=>{
                this.user = res;
            })
        },
        getSeller: function() {
            SellerCache.getSeller()
            .then((res)=>{
                this.seller = res;
            })
        }
    },
    created: function() {
        this.getUSer();
        this.getSeller();
    }
})