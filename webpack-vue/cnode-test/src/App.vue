<template>
  <div id="app">
    <cnHeader></cnHeader>
    <!--<img src="./assets/logo.png">-->
    <router-view name="main"></router-view>
    <router-view name='sidebar'></router-view>
  </div>
</template>

<script>
  import cnHeader from '@/components/Header'
  export default {
    name: 'App',
    components: {
      cnHeader
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
    /*margin-top: 60px;*/
  }
  body{
    margin: 0;
    border: 0;
    padding: 0;
  }
  .list-unstyled{
    margin: 0;
    padding: 0;
    border: 0;
  }
  .list-unstyled li{
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
  }
</style>
