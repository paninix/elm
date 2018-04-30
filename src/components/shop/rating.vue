<template>
  <div id="rating">
    <el-row>
      <el-col :span=9>
        <div class="rating-total">
          <h1>{{seller.score}}</h1>
          <div>综合评分</div>
          <div>高于周边商家{{seller.rankRate}}%</div>
        </div>
      </el-col>
      <el-col :span=15>
        <div class="rating-all">
          <div>
            <span>服务态度</span>
            <el-rate v-model="seller.serviceScore" disabled show-score text-color="#ff9900" score-template="{value}">
            </el-rate>
          </div>
          <div>
            <span>商品质量</span>
            <el-rate v-model="seller.foodScore" disabled show-score text-color="#ff9900" score-template="{value}">
            </el-rate>
          </div>
          <div>
            <span>送达时间</span>
            <div>{{seller.deliveryTime}}分钟</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="block"></div>
    <div class="rating-content">
      <div class="rating-content-head">
        <span @click="getRatings(0)" :class="{good:true,goodActive:isActive === 0}">全部</span>
        <span @click="getRatings(1)" :class="{good:true,goodActive:isActive === 1}">推荐</span>
        <span @click="getRatings(-1)" :class="{bad:true,badActive:isActive === -1}">吐槽</span>
      </div>
      <div class="rating-content-text">
        <ul>
          <li v-for="(rating,index) in ratings" :key="index">
            <div class="rating-content-img">
              <img :src="rating.avatar">
            </div>
            <div class="rating-content-info">
              <div class="rating-content-info-1">
                <span>{{rating.nick}}</span>
                <span>{{rating.rateTime}}</span>
              </div>
              <div class="rating-content-info-2">
                <span>{{rating.score}}分</span>
                <span>{{rating.deliveryTime}}分钟送达</span>
              </div>
              <div class="rating-content-info-3">
                {{rating.text}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ratings: [],
        seller: {},
        isActive:0,
      };
    },
    methods: {
      getRatings: function(type) {
        this.isActive = type;
        this.api.getRatings(type)
          .then(res => {
            if (res.data.status) {
              this.ratings = res.data.data;
            }
          })
          .catch(error => {
            console.log(error);
          });
      },
      getSeller: function() {
        this.api.getSeller()
          .then(res => {
            if (res.data.status) {
              this.seller = res.data.data;
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    created: function() {
      this.getRatings(0);
      this.getSeller();
    }
  };
</script>

<style lang="less" scoped>
  #rating {
    .el-row {
      padding: 18px 0px;
      .rating-total {
        font-size: 12px;
        text-align: center;
        border-right: 1px solid #ccc;
        h1 {
          font-size: 24px;
          color: #f90;
          line-height: 28px;
          font-weight: normal;
        }
        div {
          margin: 8px 0px;
        }
      }
      .rating-all {
        padding: 0px 16px;
        font-size: 12px;
        div {
          overflow: hidden;
          span {
            float: left;
            line-height: 20px;
            margin-right: 10px;
          }
          .el-rate {
            float: left;
          }
          div {
            font-size: 12px;
            color: #93999f;
            line-height: 18px;
            float: left;
          }
        }
      }
    }
    .rating-content {
      .rating-content-head {
        padding: 18px;
        font-size: 12px;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        span {
          float: left;
          width: 64px;
          line-height: 32px;
          text-align: center;
          margin-right: 8px;
        }
      }
      .rating-content-text {
        font-size: 12px;
        li {
          padding: 18px 0px;
          margin: 0px 18px;
          border-bottom: 1px solid #ccc;
          overflow: hidden;
          .rating-content-img {
            float: left;
            margin-right: 12px;
            img {
              width: 28px;
              height: 28px;
              border-radius: 50%;
            }
          }
          .rating-content-info {
            float: left;
            width: 85%;
            .rating-content-info-1 {
              overflow: hidden;
              span:first-child {
                float: left;
              }
              span:last-child {
                float: right;
              }
            }
            .rating-content-info-2 {
              margin: 6px 0px;
              span:first-child {
                color: #f90;
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  }
</style>
