<template>
  <div id="cart">
    <header>
      <ul>
        <li>
          <i class="fa fa-angle-left fa-2x" @click="$router.go(-1)"></i>
        </li>
        <li>购物车</li>
        <li><router-link to="/cart">完成</router-link></li>
      </ul>
    </header>
    <div class="wrapper" v-if="this.cartinfo">
          <div  class="sigle" v-for="(x) in this.cartinfo">
         <input class="radio" type="checkbox" v-model="x.deleChecked" />
         <img :src="x.pic"/>
         <span  @click="popupVisible = true">{{x.name}}</span>
         <ul>
              <li @click="minus(x)">
                <i class="fa fa-minus"></i>
              </li>
              <li><input type="text" v-model="x.num"></li>
              <li @click="plus(x)">
                <i class="fa fa-plus"></i>
              </li>
            </ul>
        </div>
    </div>
    <footer>
        <input type="checkbox" @click="allCheck">
        全选 
        <div class="del" @click="dele">删除</div>
    </footer>
    <!-- 弹出的选择框 -->
     <!-- <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-">
      <div class="shipping-cart">
        <div class="shop-num">
          <div class="prod-info">
            <img v-bind:src="this.info.pic" style="width:100px">
            <span>{{this.info.title.slice(0,this.info.title.length-1)}}</span>
            <span>{{this.info.price}}</span>
          </div>
          <hr>
          <div class="sort">
            <span>种类</span>
            <mt-badge
              size="small"
              v-for="(x) in this.info.sort"
              v-model=color="x.color"
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
    </mt-popup> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
       popupVisible: false,
       allChecked: flase
    };
  },
  computed: {
    ...mapState(["cartinfo"]),
    ...mapGetters(['allNum','allPrice'])
  },
  methods:{
      ...mapMutations(['dele']),
      allCheck(){
          this.allChecked=!this.allChecked;
          this.cartinfo.forEach(element => {
              element.checked=this.allChecked;
          });
          console.log(this.cartinfo);
      },
      minus(x) {
        if (x.num > 0) {
          x.num--;
        }
      },
      plus(x) {
        x.num++;
      },
  }
};
</script>

<style>
ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  line-height: 1.6;
}
 .radio{
    position: relative;
    top:-45px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    border-radius: 50%;
}

.single{
    height:100px;
    overflow: hidden;
}
img{
    width:30%;
    border-radius: 10%;
}
footer{
  width:100%;
    height:40px;
    position:fixed;
    bottom:0;
    background: white;
}
footer div{
    display:inline-block;
    line-height: 1;
}
.all{
    width:30%;
    height:100%;
    text-align: center;
    line-height: 35px;
    border-radius: 10%;
    background-color: crimson;
    color:white;
    float:right;
}
.del{
  width:40px;
  padding:10px;
  background:crimson;
  color:white;
}

</style>