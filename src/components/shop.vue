<template>
  <div id="shop">
    <div id="shopheader">
      <ul>
        <li>
          <i class="fa fa-paper-plane fa-1x"></i>
        </li>
        <!-- <li><i class="fa fa-plus fa-2x"></i></li> -->
        <li id="input-box">
          <router-link to="/search">
            <i class="fa fa-search fa-1x"></i>
            <input type="text" id="Input" placeholder="迷你贝贝南瓜">
          </router-link>
        </li>
        <li>
          <router-link to="/cart">
            <i class="fa fa-shopping-cart fa-2x"></i>
            <mt-badge v-if="this.allNum" size="small">{{this.allNum}}</mt-badge>
          </router-link>
        </li>
        <!-- <li><i class="fa fa-microphone fa-2x"></i></li> -->
        <!-- <li><i class="fa fa-bell-o fa-2x"></i></li> -->
      </ul>
    </div>
    <div id="taste-new">
      <div class="bar">
        <div class="lable">
          <h2>爱尝鲜</h2>
          <span>全网好货，超值低价</span>
        </div>
        <button>查看全部</button>
      </div>
      <div class="show">
        <article class="single" v-for="(x) in this.index.slice(0,3)" :key="x.index">
          <router-link :to="{ name:'detail', query: { id : x.id  }}">
            <img v-bind:src="x.pic" width="20%" height="20%" alt>
            <section>
              <span class="tit">{{x.title}}</span>
              <span>{{x.author}}</span>
            </section>
          </router-link>
        </article>
        <br>
        <article class="single" v-for="(x) in this.index.slice(3,6)" :key="x.index">
          <router-link :to="{ name:'detail', query: { id : x.id  }}">
            <img v-bind:src="x.pic" width="20%" height="20%" alt>
            <section>
              <span class="tit">{{x.title}}</span>
              <br>
              <span>{{x.author}}</span>
            </section>
          </router-link>
        </article>
        <br>
        <article class="single" v-for="(x) in this.index.slice(6,9)" :key="x.index">
          <router-link :to="{ name:'detail', query: { id : x.id  }}">
            <img v-bind:src="x.pic" width="20%" height="20%" alt>
            <section>
              <span class="tit">{{x.title}}</span>
              <br>
              <span>{{x.author}}</span>
            </section>
          </router-link>
        </article>
      </div>
      
    </div>
    <div class="shop-list">
        <div class="single-list" v-for="item in list" :key="item.index">
          <router-link :to="{ name:'detail', query: { id : item.id  }}">
            <img v-lazy="item.pic">
            <!-- <img :src="item.pic" alt=""> -->
            <p>{{item.title}}</p>
            <span claass="price">￥{{item.price}}</span>
            <span class="sellnum">{{item.sellnum}}</span>
          </router-link>
        </div>
      </div>
  
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BScroll from "better-scroll";
var shopList = document.querySelector(".shop-list");
// var scroll = new BScroll(shopList);
export default {
  name: "tasteNew",
  data() {
    return {
      index: [],
      list: []
    };
  },
  computed: {
    ...mapGetters(["allNum"])
  },
  created() {
    this.$ajax.get("/news/index").then(res => {
      this.index = res.data.articles;
    });
    this.$ajax.get("/list").then(res => {
      console.log(res.data);
      this.list = res.data;
    });
  }
};
</script>

<style lang='stylus' scoped>

#shopheader {
  width:100%;
  z-index: 100;
  background: #fff;
  position: fixed;
  top: 0;
  ul {
    list-style: none;
    min-height:60px;
    display: flex;
    justify-content: space-around;
    padding: 4px 10px;
    #input-box {
      background: #aaaaaa;
      padding: 5px;
      border: none;
      width: 80%;

      #Input {
        background: #aaaaaa;
        border: none;
        padding: 9px;
      }
    }

    .fa-paper-plane {
      padding: 30px 30px 0 0;
      &:after {
        content: '长沙市';
        display: inline-block;
        position: absolute;
        left: 0;
        top: 20px;
      }
    }
    .fa-paper-plane{
      padding-right:1rem;
    }
  }
}

#taste-new {
  margin-top: 60px;
  padding:0.3rem;
  box-sizing: border-box;
  width: 10rem;
  .bar {
    overflow: hidden;

    .lable {
      float: left;
    }

    button {
      color: red;
      font-size: 20px;
      background: none;
      border: none;
      float: right;
    }
  }

  .show {
    height: 7rem;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    font-size:16px;
    .single {
      display: inline-block;
      width: 7rem;
      height: 2.2rem;
      section {
        display: inline-block;
        margin-top:1rem;
      }
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 0.2rem;
      }
    }
  }
}

.single-list {
  width: 5rem;
  display: inline-block;
  font: 12px;
  box-sizing: border-box;
  img {
    width:4rem;
  }

  .price {
    color: red;
  }

  .sellnum {
    float: right;
    padding-right: 10px;
  }
}
</style>

