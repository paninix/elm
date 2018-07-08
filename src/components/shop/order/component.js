import cart from '@/components/common/cart/ui';
import Base from '@/base/base.vue'

import GoodCache from '@/axios/good/cache'

export default Base.extend({
  components: {
    cart
  },
  data() {
    return {
      goods: []
    };
  },
  methods: {
    getGood: function() {
      this.goodCache.getGoods({
        success: res=>this.goods = res
      })
    },
    addFood: function(food) {
      this.$refs[food.foodId][0].style.display = "block";
      this.$store.dispatch("addOrder", food);
    },
    subFood: function(food) {
      // this.$refs[food.foodId][0].style.display = "none";
      this.$store.dispatch("subOrder", food);
    }
  },
  created: function() {
    this.goodCache = new GoodCache() 
    this.getGood();
  }
})