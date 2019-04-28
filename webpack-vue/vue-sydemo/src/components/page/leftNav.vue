<template>
    <div class="left-nav-ctn">
      <ul class="nav-list list-unstyled">
        <li class="nav-item">
          <svg class="icon icon-sy" aria-hidden="true">
            <use xlink:href="#iconshouyintai"></use>
          </svg>
          <span>收银</span>
        </li>
        <li class="nav-item">
          <svg class="icon icon-dp" aria-hidden="true">
            <use xlink:href="#icondianpu"></use>
          </svg>
          <span>店铺</span>
        </li>
        <li class="nav-item">
          <svg class="icon icon-dp" aria-hidden="true">
            <use xlink:href="#iconshangpin"></use>
          </svg>
          <span>商品</span>
        </li>
        <li class="nav-item">
          <svg class="icon icon-dp" aria-hidden="true">
            <use xlink:href="#iconhuiyuan"></use>
          </svg>
          <span>会员</span>
        </li>
        <li class="nav-item">
          <svg class="icon icon-dp" aria-hidden="true">
            <use xlink:href="#icontongji"></use>
          </svg>
          <span>统计</span>
        </li>
         <li class="nav-item">
          <svg class="icon icon-dp" aria-hidden="true">
            <use xlink:href="#iconshezhi"></use>
          </svg>
          <span>设置</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "leftNav"
    }
</script>

<style lang="scss" scoped>
  .list-unstyled{
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
  }
  .left-nav-ctn{
    height: 100%;
    width: 60px;
    position: fixed;
    top: 0;
    left: 0;
  }
  .icon {
    /*vertical-align: 100%;*/
    fill: currentColor;
    overflow: hidden;
  }
  .nav-list{
    width: 60px;
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 25px;
    //top: 50%;
    //transform: translateY(-50%);
    /*border: 1px solid #ccc;*/
    /*border-bottom: none;*/
    .nav-item{
      padding: 10px 0;
      width: 100%;
      /*border-bottom: 1px solid #ccc;*/
      .icon{
        height: 30px;
        width: 30px;
        display: inline-block;
        text-align: center;
        margin: 0;
        padding: 0;
      }
      span{
        /*height: 20px;*/
        display: block;
        text-align: center;
        font-size: 16px;
        margin-top: -5px;
        /*transform: translateY(50%);*/
      }
    }
  }
</style>
