<template>
  <div id="detail">
    <!-- 页面头部 -->
    <header>
      <ul>
        <li id="back" @click="back">
          <i class="fa fa-angle-left fa-2x"></i>
        </li>
        <li>
          <i class="fa fa-weixin fa-2x"></i>
        </li>
        <li>
          <i class="fa fa-ellipsis-h fa-2x"></i>
        </li>

        <li class="cart">
          <router-link to="/cart">
            <i class="right fa fa-shopping-cart fa-2x"></i>
            <mt-badge size="small">{{this.allNum}}</mt-badge>
          </router-link>
        </li>
      </ul>
    </header>
    <!-- 商品轮播图 -->
    <swipe></swipe>
    <div class="info-bar">
      <div class="rate">
        <span>评分</span>
        <span>{{this.info.rate}}</span>
      </div>
      <div class="sellmon">
        <span>月销</span>
        <span>{{this.info.sellnum}}</span>
      </div>
      <div class="sellnum">
        <span>总销量</span>
        <span>{{this.info.sellmon}}</span>
      </div>
    </div>
    <hr>
    <div class="info">
      <span class="price">￥{{this.info.price}}</span>
      <span class="red-box">每日限量优惠</span>
    </div>
      <!-- <img :src="this.detailimg"> -->

    <!-- 页面footer -->
    <footer>
      <ul>
        <li>
          <i class="fa fa-institution"></i>
        </li>
        <li>
          <i class="fa fa-comment-o"></i>
        </li>
        <li class="buy buy-cart" @click="popupVisible = true">加入购物车</li>
        <li class="buy buy-now">立即购买</li>
      </ul>
    </footer>
    <!-- 加入购物车弹出框 -->
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-">
      <div class="shipping-cart">
        <div class="shop-num">
          <div class="prod-info">
            <img v-bind:src="this.info.pic">
            <section>
              <span>{{this.info.title.slice(0,this.info.title.length-1)}}</span>
              <span class="price">￥{{this.info.price}}</span>
            </section>
            
          </div>
          <hr>
          <div class="sort">
            <span>种类</span>
            <mt-badge
              size="small"
              v-for="(x) in this.info.sort"
              :color="x.color"
              :key="index"
              @click.native="chooseType(x)"
            >{{x.name}}</mt-badge>
          </div>
          <hr>
          <div class="num">
            <span>数量</span>
            <ul>
              <li @click="minus">
                <i class="fa fa-minus"></i>
              </li>
              <li>{{this.buying.num}}</li>
              <li @click="plus">
                <i class="fa fa-plus"></i>
              </li>
            </ul>
          </div>
          <mt-button type="danger" size="large" @click.native="addToCart">确认</mt-button>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import swipe from "./swipe.vue"; //轮播图组件
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      color: "grey",
      id: this.$route.query.id,
      info: {},
      popupVisible: false,
      buttonBottom: 0,
      buying: {
        num: 0,
        name: "",
        price: 0,
        pic: "",
        checked: false
      }
    };
  },
  computed: {
    ...mapState(["cartinfo"]),
    ...mapGetters(["allNum"])
  },
  components: {
    swipe
  },
  methods: {
    ...mapMutations(["add", "delete"]),
    back() {
      //返回按钮
      this.$router.go(-1);
    },
    onDateChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
      this.dateStart = values[0];
      this.dateEnd = values[1];
    },
    minus() {
      if (this.buying.num > 0) {
        this.buying.num--;
      }
    },
    plus() {
      this.buying.num++;
    },
    addToCart() {
      this.popupVisible = false;
      if(this.buying.num!=0&&this.buying.name){
        this.add(this.buying);
      }
    },
    chooseType(x) {
      if (x.color == "#888") {
        this.info.sort.forEach(item => {
          item.color="#888"
        });
        x.color = "red";
        this.buying.name = x.name;
        this.buying.price = x.price;
        this.buying.pic = x.pic;
      } 
    }
  },
  created() {
    this.$ajax
      .get("/news/detail")
      // this.$ajax.get('/news/index')
      .then(res => {
        // this.info=res.data.articles[this.id]
        this.info = res.data;
      })
      .catch(err => {
        alert(err);
      });
  },
  mounted() {
    this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
  }
};
</script>

<style lang="stylus" scoped>
toRem(val) {
	return (ceil(val / 37.5 * 100) / 100)rem
}
.prod-info img{
  width:toRem(100);
  margin:toRem(8)
}
mt-badge{
  margin:toRem(3);
}
section{
  display:inline-block;
  vertical-align :top;
  margin:toRem(8);
}
hr{
  border:0.5px solid #eee;
}
.mint-popup hr{
  color:#bbb;
  transform:scaleY(0.5);
  margin:10px 5px;
}
#back {
  margin-left: 10px;
}
.cart {
  float:right;
}
ul {
  width: 100%;
  list-style: none;
  display: inline-block;
}
li {
  padding: toRem(15px);
  display: inline-block;
  vertical-align: bottom;
}
footer > ul {
  position: fixed;
  bottom: 0;
}
footer i{
  font-size:toRem(28px);
}
.buy {
  text-align: center;
  height: 40px;
  line-height :40px;
  background: red;
  color: #fff;
}
.buy-cart{
  width:toRem(100);
}
.buy-now{
  width:toRem(94);
}
.info-bar {
  display: flex;
  justify-content: space-around;
}
.price {
  display:block;
  color: red;
}

.mint-popup- {
  width: 100%;
  .picker-slot-wrapper,
  .picker-item {
    backface-visibility: hidden;
  }
}

/* li>i{
       
    } */
</style>
