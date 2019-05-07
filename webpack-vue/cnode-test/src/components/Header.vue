<template>
  <div class="header-wrapper">
    <div class="header-ctn">
      <router-link :to="{name: 'root'}">
        <img class="logo" src="../assets/cnodejs_light.svg" alt="">
      </router-link>
      <span class="about">
        <router-link class="about-link" to="#">关于</router-link>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss" scoped>
  .header-wrapper {
    width: 100%;
    height: 50px;
    background: #5a5555;
    /*position: relative;*/
    .header-ctn{
      width: 90%;
      height: 100%;
      margin: 0 auto;
    }
    .logo{
      max-width: 120px;
      position: relative;
      /*left: 20px;*/
      vertical-align: middle;
      top: 50%;
      transform: translateY(-50%);
      /*margin-left: 100px;*/
      float: left;
    }
    .about{
      float: right;
    }
    .about-link{
      font-size: 18px;
      text-decoration: none;
      color: #cbc9c9;
      height: 50px;
      line-height: 50px;
    }
  }
</style>
