<template>
  <div class="search">
    <header>
      <ul>
        <li>
          <i class="fa fa-angle-left fa-2x" @click="$router.go(-1)"></i>
        </li>
        <li id="input-box">
            <i class="fa fa-search fa-1x"></i>
            <input  id="Input" v-model="searchVal" placeholder="迷你南瓜">
        </li>
        <li @click="search">
          搜索
        </li>
      </ul>
    </header>
    <div  class="history">
      <div>历史搜索</div>
        <span v-for='(x) in getStorage("searchVal")'>{{x}}</span>
    </div>
    <div class="popular">
      <div>流行搜索</div>
      <!-- <span></span> -->
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        searchVal:''
      }
    },
    methods:{
        setStorage(key,value){
            if(!window.localStorage){
                alert("浏览器不支持localstorage");
                return false;
            }else{
                var storage=window.localStorage;
                if(storage.getItem(key)===null){
                  storage.setItem(key,value);
                }else{
                    var res=storage.getItem(key)+','+value;
                    var arr=(storage.getItem(key)).split(',');
                    storage.setItem(key,res);
                }
            }
        },
        getStorage(key){
            if(!window.localStorage){
                alert("浏览器不支持localstorage");
            }else{
                var storage=window.localStorage;
                return storage.getItem(key)?storage.getItem(key).split(','):false;
            }
        },
        search(){
            this.setStorage("searchVal",this.searchVal);
            this.$router.push('/searchRes');
        }
    }
};
</script>

<style>
.history span{
  display:inline-block;
  height:20px;
  padding:5px 10px;
  background:#f5f2f0;
  margin:10px;
  border-radius: 5px;
}

</style>
