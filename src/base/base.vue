<script>
    import Vue from 'vue'
    import * as moment from 'moment'

    moment.locale('zh-cn');

    export default Vue.extend({
        data: function () {
            return {
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
            toDate: function (val) {
                val = val || new Date()
                return new Date(val).toLocaleDateString()
            },
            timeToNow: function (value) {
                return moment().startOf('day').from(value)
            }
        }
    })
</script>
