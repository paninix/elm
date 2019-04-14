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
            SellerCache.getSellerAll()
            .then((res)=>{
                this.seller = res;
            })
        }
    },
    created: function() {
        this.getSeller();
    }
})