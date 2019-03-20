import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 1,
  todos: [{id: 1, done: false},{id: 2, done: true}]
};

const mutations = {
  addCount(state, n){
    // state.count++;
    state.count+=n;
  },
  subCount(state, n){
    state.count-=n;
  },
  changeTodos(state){
    let todoList = state.todos;
    let todoId = todoList[todoList.length - 1]["id"];
    todoList.push({id: ++todoId, done: false});
  }
};

const getters = {
  todos(state){
    return state.todos.filter((item, index) => {
      return item.id > 5;
    });
  }
};

const actions = {
  triggerAdd(context, n){
    setTimeout(()=>{
      context.commit('addCount', n);
    },1000);
  }
};

const moduleA = {
  state,
  getters,
  mutations,
  actions
};

export default new Vuex.Store({
  modules: {
    a: moduleA
  }
});
