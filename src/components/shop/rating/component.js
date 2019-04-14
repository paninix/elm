import Base from '@/base/base.vue'
import SellerCache from '@/axios/seller/cache'

export default Base.extend({
    data() {
      return {
        ratings: [],
        seller: {},
        isActive:'0',
      };
    },
    methods: {
      getRatings: function(type) {
        this.isActive = type;
        SellerCache.getRatings(type)
        .then((res)=>{
          this.ratings = res;
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
      this.getRatings('0');
      this.getSeller();
    }
  })