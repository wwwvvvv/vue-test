<template>
  <div class="vuex-ctn1">
    <h3>{{msg}}</h3>
    <hr>
    <p>{{count}}</p>
    <hr>
    <p>desc: {{shears}}</p>
    <br>
    <button @click="$store.commit('subCount', 10)">subtraction</button>
    <button @click="$store.commit('addCount', 5)">addition</button>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import {mapState} from 'vuex'
  export default {
    name: "vuex1",
    data() {
      return {
        msg: 'hello vuex!'
      }
    },
    computed: {
      ...mapState(['count']),
      shears(){
        return 'There are many shears.'
      }
    },
    methods: {},
    store
  }
</script>

<style scoped>

</style>
