<template>
  <div class="user-ctn">
    <h2> {{$route.query}} </h2>
    <p>THIS IS USER CENTER PAGE.</p>
    <slot name="title">this is a slot.</slot>
    <label for="name">
      <input :value="yourName" @keyup="changeYourName" placeholder="please input your name." type="text" id="name">
    </label>
    <label for="title">
      <input type="text" id="title" placeholder="please input your title" @input="changeYourTitle">
    </label>
    <label for="ref">
      <input value="testProp" type="text" id="ref" placeholder="ref prop test">
    </label>

    <div class="list">
      <div class="list-box1">1</div>
      <div class="list-box2">2</div>
      <div class="list-box3">3</div>
      <div class="list-box4">4</div>
      <div class="list-box5">5</div>
      <div class="list-box6">6</div>
      <div class="list-box7">7</div>
      <div class="list-box8">8</div>
      <div class="list-box9">9</div>
      <div class="list-box10">10</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userCenter",
    props: {
      yourName: {
        require: true,
        type: String
      },
      title: String
    },
    data() {
      return {
        testProp: '11111111111',
        pageTit: this.$route.meta
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log('准备进入路由模板');
      next();
    },
    beforeRouteLeave(to, from, next) {
      console.log('准备离开路由模板');
      next();
    },
    methods: {
      changeYourName(event) {
        // console.log('this.yourName: %s', this.yourName);
        console.log('this.$root', this.$root);
        this.$emit('changeName', event.target.value);
      },
      changeYourTitle(event) {
        console.log('this.yourTitle: %s', this.title);
        this.$emit('update:title', event.target.value);
      }
    },
    mounted() {
      console.log('this.$route.userid', this.$route);
    }
  }
</script>

<style lang="scss" scoped>
  .user-ctn {
    p {
      font-size: 16px;
      color: red;
    }
    @for $idx from 1 through 10 {
      .list-box#{$idx} {
        width: 200px;
        height: 200px;
        background: rgba(random(255),$idx * 30 + random(100), random(255), 1);
        animation: movAni 2s linear $idx * -0.5s infinite alternate;
      }
    }
    @keyframes movAni {
      0%{
        transform: translateY(0px);
      }
      100%{
        transform: translateY(200px);
      }
    }
  }
</style>
