// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// console.log(router);
router.beforeEach((to, from, next) => {
  if(!!to.meta.title) {
    document.title = to.meta.title;
  }

  console.log('to-where', to);
  // alert('www')
  next();
});

router.afterEach((to, from) => {
  console.log('afterEach-to', to);
  console.log('afterEach-from', from);
});

// 全局API
// Vue.directive
// Vue.directive('jsdan', function (el, binding, vnode) {
//   el.style = 'color:' + binding.value;
//   console.log('el', el);
//   console.log('binding', binding);
//   console.log('vnode', vnode);
// });
Vue.directive('jsdan', {
  bind(el, binding) { //只执行一次，在初始化的时候进行
    el.style = 'color:' + binding.value;
    console.log('1 - bind');
  },
  inserted() {//已经插入完成
    console.log('2 - inserted');
  },
  update() { // 当元素的值或者dom元素进行更新时
    console.log('3 - update');
  },
  componentUpdated() { // 更新完成时调用
    console.log('4 - componentUpdated');
  },
  unbind(){// 解绑时调用
    console.log('5 - unbind');
  }
});

Vue.mixin({
  updated(){
    console.log("全局mixin.")
  }
});

Vue.directive('haha', function (el, binding, vnode) {
  el.onclick = function () {
    alert(binding.value);
  }
});

/* eslint-disable no-new */
new Vue({
  delimiters: ['${', '}'],
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data(){
    return {
      eventHub: new Vue()
    }
  }
  // delimiters:['${','}']
});
