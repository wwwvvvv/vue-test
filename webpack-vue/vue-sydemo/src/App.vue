<template>
  <div id="app">
    <left-nav></left-nav>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import leftNav from '@/components/page/leftNav'
export default {
  name: 'App',
  components: {
    leftNav
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
    height: 100%;
    /*margin-top: 60px;*/
  }
  body{
    margin: 0;
    position: relative;
  }
  html,body{
    min-height: 100%;
    height: 100%;
  }
  .main{
    width: 100%;
    height: 100%;
    padding-left: 70px;
    box-sizing: border-box;
  }
</style>
