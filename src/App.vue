<template>
  <div id="app">
    <!-- <router-view/> -->
    <div id="nav">
      <router-link to="/home" tag="button" replace >首页</router-link>
      <button @click="aboutClick">关于</button>
      <!-- <router-link to="/about">关于</router-link> -->
      <!-- <router-link :to="'/user/'+userId">用户</router-link> -->
      <!-- <router-link :to="{path:'/profile', query: {name: '张飞', age: '18'}}" tag="button" >个人文件</router-link> -->
      <button @click="userClick">用户</button>
      <button @click="profileClick">个人文件</button>
      <router-link to="/video" tag="button" replace >video</router-link>
      <router-link to="/echarts" tag="button" replace >图表</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  // components:{
  //   videoPlayer
  // },
  data() {
    return {
      userId: 'zhangxuefei'
    }
  },
  methods: {
    aboutClick() {
      // 或者用replace代替push
      this.$router.push('/about')
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({path:'/profile', query: {name: '张飞', age: '18'}})
    }
  }  
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
