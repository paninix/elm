import Base from '@/base/base.vue'
import SellerCache from '@/axios/seller/cache'

export default Base.extend({
    data() {
      return {
        seller: {
          supports:[{}]
        },
        isShowIntro: false
      };
    },
    created: function() {
      SellerCache.getSeller()
      .then((res)=>{
        this.seller = res;
      })
    }
  })