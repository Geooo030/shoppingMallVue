<template>
  <div id="cart">
    <header>
      <ul>
        <li>
          <i class="fa fa-angle-left fa-2x" @click="$router.go(-1)"></i>
        </li>
        <li>购物车</li>
        <li @click="edit=!edit" class="edit" v-if="!edit">编辑</li>
        <li @click="edit=!edit" class="edit" v-if="edit">完成</li>
      </ul>
    </header>
    <div class="sigle" v-for="(x) in this.cartinfo" :key="x.index">
      <label class="mint-checklist-label">
        <span class="mint-checkbox">
          <input
            type="checkbox"
            class="mint-checkbox-input"
            v-model="x.checked"
            @change="ifAllCheck"
          >
          <span class="mint-checkbox-core"></span>
        </span>
      </label>
       <router-link :to="{ name:'detail', query: { id : x.id  }}">
            <img v-bind:src="x.pic">
      </router-link>
      <div class="right">
        <div class="prod-title">{{x.name}}</div>
        <div class="pord-info">
          <span class="prod-price" v-if="!edit">￥{{x.price}}</span>
          <input type="text" v-if="!edit" v-model="x.num" class="edit-num">
          <ul v-if="edit" class="edit-tool">
            <li @click="minus(x)" v-bind="x.num">
              <i class="fa fa-minus"></i>
            </li>
            <li>
              <input type="text" v-model="x.num" class="edit-num">
            </li>
            <li @click="plus(x)">
              <i class="fa fa-plus"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="cart-footer">
      <label class="mint-checklist-label">
        <span class="mint-checkbox">
          <input type="checkbox" class="mint-checkbox-input radio" @change="allCheck">
          <span class="mint-checkbox-core"></span>
        </span>
      </label>
      全选 &nbsp&nbsp
      <div>合计 {{this.allPrice}}元&nbsp&nbsp</div>
      <div>共 {{this.allNum}} 件</div>
      <div class="all">结算</div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { watch } from "fs";
export default {
  data() {
    return {
      allChecked: false,
      edit: false
    };
  },
  computed: {
    ...mapState(["cartinfo"]),
    ...mapGetters(["allNum", "allPrice"])
  },
  methods: {
    minus(x) {
      if (x.num > 0) x.num--;
    },
    plus(x) {
      x.num++;
    },
    allCheck() {
      this.allChecked = !this.allChecked;
      this.cartinfo.forEach(element => {
        element.checked = this.allChecked;
      });
    },
    ifAllCheck() {
      var a = document.querySelectorAll("input[type=checkbox]:not(.radio)")
        .length;
      var b = document.querySelectorAll(
        "input[type=checkbox]:not(.radio):checked"
      ).length;
      var c = document.querySelector(".radio");
      if (a == b && a != 0) {
        c.checked = true;
      } else {
        c.checked = false;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
toRem(val) {
  return (ceil(val / 37.5 * 100) / 100)rem;
}

.mint-checkbox {
  top: toRem(77);
  position: relative;
}

footer .mint-checkbox {
  position: absolute;
  top: 0;
  left: 10px;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  line-height: 1.6;
}

.edit {
  width: toRem(40);
  text-align: center;
}

.edit-tool {
  display: flex;
}

.edit-tool li {
  padding: 8px;
}

.edit-num {
  width: toRem(40);
  height: toRem(30);
  border: 1px solid #bbb;
  text-align: center;
}

.single {
  height: toRem(100);
  /* overflow: hidden; */
  margin: toRem(20) toRem(10);
}

.right {
  margin-left: toRem(30);
  display: inline-block;
  vertical-align: top;
}

.pord-info {
  display: inline-block;
}

.prod-title {
  margin-bottom: toRem(40);
}

.prod-price {
  color: red;
  float: left;
  line-height: toRem(32);
}

.pord-info>input {
  display: block;
  width: toRem(30);
  float: right;
  margin-left: toRem(20);
  text-align: center;
}

img {
  width: 30%;
  border-radius: 10%;
  margin-left: toRem(40);
}

.cart-footer {
  border: solid 1px #eee;
  width: 100%;
  height: toRem(40);
  position: fixed;
  bottom: 0;
  background: white;
  line-height: toRem(40);
  padding-left: toRem(40);
}

footer div {
  display: inline-block;
  line-height: 1;
}

.cart-footer .all {
  width: toRem(120);
  height: toRem(40);
  text-align: center;
  line-height: toRem(40);
  background-color: crimson;
  color: white;
  float: right;
  margin-right: toRem(40);
  border-radius: 5px;
}
</style>