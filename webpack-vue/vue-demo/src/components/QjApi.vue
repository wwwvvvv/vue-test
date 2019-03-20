<template>
  <div class="qjapi-ctn">
    <slot name="slot2"></slot>
    <dl>
      <dt>blog</dt>
      <dd>blogUrl：<slot name="blogUrl"></slot></dd>
      <dd>blogName：<slot name="blogName"></slot></dd>
      <dd>blogSkill：<slot name="blogSkill"></slot></dd>
    </dl>
    <p v-jsdan="fontColor">{{count}}</p>
    <button @click="addCount">Add</button>
    <!--<p v-haha="hello">{{hello}}</p>-->
    <!--<p>${hello}</p>-->
    <p>${count}</p>
    <!--Vue.extend-->
    <div id="author"></div>
    <!--Vue.set-->
    <ul>
      <li v-for="item in arr">{{item}}</li>
    </ul>
    <button @click="changeArr">change arr</button>
    <!--computed-->
    <label for="price">
      price：
      <input type="text" id="price" v-model="price">
    </label>
    <p>newPrice：{{newPrice}}</p>
    <dl>
      <dt>news list</dt>
      <dd v-for="item in sortNewsList">{{item.title}} {{item.date}}</dd>
    </dl>
    <hr>
    <!--watch-->
    <p>天气建议</p>
    <label for="temperature">
      <input type="number" id="temperature" v-model.number="temperature">
    </label>
    <p>{{showSuggestion}}</p>
    <hr>
    <button @click="fupdate">刷新</button>
  </div>
</template>

<script>
  import Vue from 'vue'
  var addLog = {
    updated() {
      console.log('数据发生变化，变化成' + this.count);
    },
    data(){
      return {
        hello: 'hello world!!!!!!!!!!!!',
        fontColor: 'green'
      }
    }
  };
  var extendsOptions = {
    created() {
      console.log('extend created!');
    },
    data(){
      return {
        testOption: 'extend test.'
      }
    }
  };
  export default {
    name: "qj-api",
    computed: {
      newPrice(){
        return `￥${this.price}元`
      },
      sortNewsList() {
        return this.newsList.sort((a, b)=>{
          console.log(new Date(b.date));
          return new Date(b.date) - new Date(a.date);
        });
      }
    },
    components: {
    },
    watch: {
      temperature(newVal, oldVal) {
        if (newVal < 10) {
          this.showSuggestion = this.suggestion[0];
        } else if (newVal >= 10 && newVal <= 20) {
          this.showSuggestion = this.suggestion[1];
        } else {
          this.showSuggestion = this.suggestion[2];
        }
      }
    },
    data() {
      return {
        count: 0,
        fontColor: 'red',
        arr: ['aaa', 'bbb', 'ccc'],
        price: 100,
        temperature: 0,
        suggestion: [
          '温度低于10摄氏度',
          '温度在10至20摄氏度',
          '温度高于30度'
        ],
        showSuggestion: '',
        newsList: [
          {title: '香港或就“装甲车被扣”事件追责 起诉涉事运输公司', date: '2017/3/10'},
          {title: '日本第二大准航母服役 外媒：针对中国潜艇', date: '2017/3/12'},
          {title: '中国北方将有明显雨雪降温天气 南方阴雨持续', date: '2017/3/13'},
          {title: '起底“最短命副市长”：不到40天落马，全家被查', date: '2017/3/23'},
        ]
      }
    },
    created(){
      // Vue.extend
      console.log('构造器 created');
      this.$nextTick(()=>{
        var authorExtend = Vue.extend({
          template: '<p><a :href="authorUrl">{{authorName}}</a></p>',
          data() {
            return {
              authorName: 'yind',
              authorUrl: 'http://www.baidu.com'
            }
          }
        });
        new authorExtend().$mount('#author');
      });
    },
    updated(){
      console.log('构造器里面的updated方法');
    },
    activated(){

    },
    beforeDestroy(){
      console.log('beforeDestroy');
    },
    destroyed() {
      console.log('destroy');
    },
    deactivated(){

    },
    methods: {
      addCount() {
        this.count++;
        if (this.count > 5) {
          // this.$destroy();
          this.$root.eventHub.$emit('showLoading');
        }
        if(this.count > 10) {
          this.$root.eventHub.$off('showLoading');
        }
      },
      changeArr() {
        this.arr[1] = "ddd";
        this.$set(this.arr, 1,'ddd');
      },
      fupdate() {
        this.$forceUpdate();
      }
    },
    // mixins:[addLog],
    // extends: extendsOptions,
    delimiters:['$[',']'] //插值形式就变成了${}
  }
</script>

<style lang="scss" scoped>

</style>
