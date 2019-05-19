<template>
  <div id="login">
    <h1>登录</h1>
    <form >
      <input type="text" placeholder="账号" v-model="userinfo.user" id="account">
      <input type="text" placeholder="登录密码" v-model="userinfo.passwd" id="passwd">
      <input type="button" value="登录" @click="submitt" id="login-btn">
    </form>
  </div>
</template>

<script>
console.log('aaa');
export default {
    data(){
        return {
            userinfo:{}
        }
    },
    methods:{
        submitt(){
            this.$ajax.get('https://wd7632472960qbifiu.wilddogio.com/login.json')
            .then((res)=>{
                if(res.data.count.user==this.userinfo.user&&res.data.count.passswd==this.userinfo.passwd){
                    window.localStorage.setItem('loginInfo',JSON.stringify(this.userinfo));
                    this.$router.push('/shop');
                }else{
                    alert('密码错误或者用户不存在');
                }
            })
        }
    }
};
</script>

<style>
#login{
    margin-top:50px;
}
h1{
    text-align: center;
}
#account,#passwd{
    padding-left:10px;
    width:80%;
    height:35px;
    margin: 20px 10%;
}
#login-btn{
    width:80%;
    height:50px;
    color:aliceblue;
    background:blue;
    margin:20px 10%;
}

</style>
