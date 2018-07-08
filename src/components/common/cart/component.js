import Base from '@/base/base.vue'

export default Base.extend({
    data() {
        return {
            isShowCart: false,
            leastMoney: 40,
        }
    },
    computed: {
        cartFoods() {
            return this.$store.getters.getCart;
        },
        totalMoney() {
            return this.$store.getters.getTotal;
        },
        shortMoney() {
            return this.leastMoney - this.$store.getters.getTotal;
        }
    },
    methods: {
        addFood: function(food) {
            this.$store.dispatch("addOrder", food);
        },
        subFood: function(food) {
            this.$store.dispatch("subOrder", food);
        },
        cleanCart: function(){
            this.$store.dispatch("cleanOrder");     
        }
    }
})