import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'',
    isLogin:'',
    cartinfo:[],
    // count:cartinfo.length
    test:"gello",
  },
  mutations: {
    add(state,x){
      for(var i=0;i<state.cartinfo.length;i++){
        if(state.cartinfo[i].name==x.name){
          state.cartinfo[i].num+=x.num;
          return;
        }
      }
      state.cartinfo.push(x);
    },
    dele(state){
      console.log('delete');
      state.cartinfo.forEach((item,index)=>{
        if(item.deleChecked==true){
          state.cartinfo.splice(index,1);
        }
      })
    }
  },
  getters: {
    allNum:state=>{
      let count=0;
      state.cartinfo.forEach((item)=>{
        count+=item.num;
      });
      return count;
    },
    allPrice(state){
      let allPrice=0;
      state.cartinfo.forEach((item)=>{
        if(item.checked==true){
          allPrice+=item.price*item.num;
        }
      });
      return allPrice;
    },
  }
})
