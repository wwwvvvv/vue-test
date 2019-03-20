<template>
  <div class="vuex2-ctn">
    <p>COUNT: {{count}}</p>
    <button @click="triggerAdd(15)">addCount</button>
    <button @click="subCount(5)">subCount</button>
    <dl>
      <dt>this is a todo list</dt>
      <!--<dd v-for="item in $store.getters.todos">{{item}}</dd>-->
      <dd v-for="item in todos">{{item}}</dd>
    </dl>
    <button @click="changeTodos">change todos</button>
    <!--<button @click="$store.commit('addCount', 1)">addCount</button>-->
    <!--<button @click="$store.commit('subCount', 1)">subCount</button>-->
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
  export default {
    name: "Vuex2",
    computed: {
      ...mapState(['count']),
      ...mapGetters(['todos'])
    },
    data(){
      return {

      }
    },
    methods: {
      ...mapMutations([
        'addCount', 'subCount', 'changeTodos'
      ]),
      ...mapActions([
        'triggerAdd'
      ])
    },
    store
  }
</script>

<style scoped>

</style>
