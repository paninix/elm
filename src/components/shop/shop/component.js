import Base from '@/base/base.vue'
import SellerCache from '@/axios/seller/cache'
export default Base.extend({
    data() {
        return {
            seller: {}
        }
    },
    methods: {
        getSeller: function() {
            this.sellerCache.getSellerAll({
                success:res => this.seller = res
            })
        }
    },
    created: function() {
        this.sellerCache = new SellerCache()
        this.getSeller();
    }
})