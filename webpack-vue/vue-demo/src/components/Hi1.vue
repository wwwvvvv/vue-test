<template>
  <div class="hi-ctn">
    <h1>hi-1 page</h1>
    <p>新闻 id：{{$route.params.newsId}}</p>
    <p>新闻 title: {{$route.params.newsTit}}</p>
  </div>
</template>

<script>
  export default {
    name: "Hi1",
    data() {
      return {
      }
    },
    mounted(){
      // console.log(this.$route);
    },
    methods: {
      routeInfo() {
        // return this.$route.params.username;
      }
    }
  }
</script>

<style scoped>

</style>
