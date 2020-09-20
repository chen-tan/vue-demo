<template>
  <div id="app">
    <div class="header">
      <div class="logo" @click="toHome">
        渡一教育
        </div>
      <div class="section">
        <router-link to="/home">首页</router-link>
        <router-link to="/learn">课程学习</router-link>
        <router-link to="/student">学员展示</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/activity">社区</router-link>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
      <router-view name="activity"></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  methods:{
    toHome(){
      this.$router.push({name:'home'})
    },
  }
}
</script>
  
<style scoped>
a{
  text-decoration: none;
}
  .header{
    height:60px;
    width:100%;
    background-color:#3385ff;
    display:flex;
    justify-content: space-between;
    align-items:center;
    
  }
  .header .logo{
    margin-left:200px;
    color:#fff;
  }
  .header .section{
    margin-right:200px;
  }
 .header .section a{
   margin-right:20px;
   color:#fff;
 }
 .container{
   padding-left:200px;
   margin-top:50px;
 }
 .router-link-active{
   font-weight:900;
 }
</style>
