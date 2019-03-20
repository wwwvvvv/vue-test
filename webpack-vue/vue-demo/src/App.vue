<template>
  <div id="app">
    <button @click="goback">后退</button>
    <!--<img src="./assets/logo.png">-->
    <router-link to="/">首页</router-link>
    <router-link to="/userCenter">用户中心</router-link>
    <router-link to="/hi">Hi page</router-link>
    <router-link to="/hi/hi1/100/hello world">Hi 页面1</router-link>
    <router-link to="/hi/hi2">Hi 页面2</router-link>
    <router-link to="/vuex1">vuex test</router-link>
    <router-link to="/vuex2">vuex2 test</router-link>
    <router-view name="part2"></router-view>
    <router-view name="part1"></router-view>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.$root.eventHub.$on('showLoading', function () {
      alert("loading....");
    });
  },
  methods: {
    goback(){
      this.$router.go(-1);
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
  margin-top: 60px;
}
</style>
