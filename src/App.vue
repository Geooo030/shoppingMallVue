<template>
  <div id="app">
    <router-view></router-view>
      <shopFooter v-show="this.$route.meta.footer"></shopFooter>
  </div> 
</template>
<script>
import shopFooter from './components/shopFooter.vue'
import shop from './components/shop.vue'
export default {
  components:{
    shopFooter,
    shop
  },
  // created(){
  //   this.$ajax.get('/detail/0')
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }
  

}
</script>

<style>
*{
  margin:0;
  padding:0;
}
a{
        text-decoration:none;
        color:#000;
}
</style>
