import Base from '@/base/base.vue'
import UserCache from '@/axios/user/cache'

export default Base.extend({
    data() {
        return {
            rating: {
                orderId: 0,
                score: 5,
                deliveryTime: 30,
                text: '',
                rateTime: 0,
                rateType: 0,
            }
        }
    },
    methods: {
        submitRating:function() {
            this.rating.rateTime = new Date().getTime();
            this.rating.rateType = this.rating.score >= 3? 1:-1;
            UserCache.submitRating(JSON.stringify(this.rating))
            .then((res)=>{
                this.$message({
                    message: res,
                    type: 'success'
                });
                this.$router.push({path:'/shop/rating'});
            }).catch(err=>{
                this.$message({
                    message: err,
                    type: 'warning'
                });
            });
        }
    },
    created: function(){
        this.rating.orderId = this.$route.query.id;
    }
})