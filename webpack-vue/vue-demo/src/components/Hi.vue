<template>
  <div class="hi-ctn">
    <h1>hi page</h1>
    <!--<transition name="fade" mode="out-in">-->
      <!--<router-view></router-view>-->
    <!--</transition>-->
    <transition name="jump" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Hi",
    beforeRouteEnter: (to, from, next) =>{
      console.log('准备进入路由模板');
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      console.log('准备离开路由模板');
      next();
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter{ /*进入的一瞬间*/
    opacity: 0;
  }
  .fade-enter-active{ /*过度的结束状态*/
    opacity: 1;
    transition: opacity .5s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    opacity: 0;
    transition: opacity .5s;
  }

  /*test*/
  .jump-enter{
    transform: scale(1);
  }
  .jump-enter-active{
    transform: scale(0.5);
    transform-origin: 50% 0;
    transition: transform .5s; /* 相当于 要执行的动画*/
  }
  .jump-enter-to{
    transform: scale(1);
  }
  .jump-leave{
    transform: scale(1);
  }
  .jump-leave-active{
    transform: scale(0.5);
    transform-origin: 50% 0;
    transition: transform .5s;
  }

</style>
