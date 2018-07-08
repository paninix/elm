import Base from '@/base/base.vue'
import cart from '@/components/common/cart/ui'

import GoodCache from '@/axios/good/cache'
export default Base.extend({
    components: {
        cart
    },
    data() {
        return {
            food: {},
            activeRating: 'all'
        };
    },
    methods: {
        getGood: function () {
            let foodId = this.$route.query.id;
            this.goodCache.getGood({
                data:foodId,
                success: res => this.food = res
            })
        },
        goBack: function () {
            this.$router.push({
                path: '/shop/order'
            });
        },
        addFood: function (food) {
            this.$store.dispatch("addOrder", food);
        }
    },
    created: function () {
        this.goodCache = new GoodCache()
        this.getGood();
    }
})