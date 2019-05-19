<template>
  <div id="cart">
    <header>
      <ul>
        <li>
          <i class="fa fa-angle-left fa-2x" @click="$router.go(-1)"></i>
        </li>
        <li>购物车</li>
        <li @click="editf">编辑</li>
      </ul>
    </header>
    <div class="sigle" v-for="(x) in this.cartinfo" :key="x.index">
         <input class="radio" type="checkbox" v-model="x.checked"/>
         <img :src="x.pic"/>
         <div class="right">
            <div class="prod-title">{{x.name}}</div>
            <div class="pord-info">
            <span class="prod-price"> ￥{{x.price}}</span>
         <input  type="text"  v-model="x.num" :placeholder="x.num" width="40px">
             <ul v-if="edit">
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
    </div>
    <div class="rem">
    </div>
    <footer>
        <input type="checkbox" @click="allCheck">
        全选 
        <div>合计 {{this.allPrice}}元</div>&nbsp&nbsp
        <div>共 {{this.allNum}} 件</div>
        <div class="all">结算</div>
    </footer>
    
  </div>
</template>

<script>
import { mapState, mapMutations ,mapGetters} from "vuex";
export default {
  data() {
    return {
        allChecked:flase,
        edit:false
    };
  },
  computed: {
    ...mapState(["cartinfo"]),
    ...mapGetters(['allNum','allPrice'])
  },
  methods:{
    editf(){
      this.edit=!this.edit;
      alert(this.edit);
    },
      allCheck(){
          this.allChecked=!this.allChecked;
          this.cartinfo.forEach(element => {
              element.checked=this.allChecked;
          });
      }
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
.right{
  display:inline-block;
}
.pord-info{
  display:inline-block;
}
.prod-title{
  margin-bottom: 40px;
}
.prod-price{
  color:red;
  float:left;
}
.pord-info>input{
  display:block;
  width:30px;
  float:right;
  margin-left:20px;
  text-align: center;
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

</style>
