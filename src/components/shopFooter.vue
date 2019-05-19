<template>
  <ul id="shopFooter">
    <li><i class="fa fa-home fa-2x"></i></li>
    <li><i class="fa fa-shopping-bag fa-2x"></i></li>
    <li><i class="fa fa-television fa-2x"></i></li>
    <li>
      <i class="fa fa-heart-o fa-2x"></i>
    </li>
    <li>
      <i class="fa fa-user-o fa-2x"></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'shopFooter',
  created:{
    
  }
}
</script>

<style lang='stylus' scoped>
#shopFooter
  background:#fff
  height: 100px;
  width:100%;
  padding:15px 25px
  overflow :hidden
  display:block;
  position: fixed;
  bottom: -55px;
  list-style: none;
li 
  width:20%;
  display:inline-block;



</style>
