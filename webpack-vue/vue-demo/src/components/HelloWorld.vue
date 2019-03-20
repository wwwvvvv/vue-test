<template>
  <div class="hello">
    <!--<div class="router" @click="jumpRouter">-->
      <!--&lt;!&ndash;<router-link to="/userCenter?userid=001"> This is a router link.</router-link>&ndash;&gt;-->
      <!--<p>This is jump router link.</p>-->
    <!--</div>-->

    <!--<h1>{{ msg }}</h1>-->
    <!--<p class="color" :class="{ 'active': isActive, error : hasError }">test test test test test</p>-->
    <!--<p :class="[isActive ? '': 'active', 'error', hasError ? 'active' : '']">-->
      <!--fejifiefiejfiekdpoejfiejlafoieanvkfa;dfoea[a'qajifepq[fe</p>-->
    <!--<p class='ha' v-if="isActive">哈哈哈哈</p>-->
    <!--<p v-else>啊啊啊啊啊啊</p>-->
    <!--<p v-show="hasError">error!!!!</p>-->
    <!--<ul>-->
      <!--<li v-for="(val, index) in list">{{ index }} : {{ val }}</li>-->
    <!--</ul>-->

    <!--<ul>-->
      <!--<li v-for="(val, prop, idx) in propObj">{{idx}}&#45;&#45;&#45;&#45; prop: {{prop}}, val: {{val}}</li>-->
    <!--</ul>-->
    <!--<label>-->
      <!--input的value值 <input type="text" :value="msg" @keyup="changeVal">-->
    <!--</label>-->
    <!--&lt;!&ndash;</li>&ndash;&gt;-->
    <!--&lt;!&ndash;</ul>&ndash;&gt;-->
    <!--<p>your title is: {{yourTitle}}</p>-->
    <!--<userCenter :title.sync="yourTitle" :your-name="msg" v-on:changeName="changeYourName">-->
      <!--<template slot="title">-->
        <!--Replace the slot.-->
      <!--</template>-->
    <!--</userCenter>-->
    <!--&lt;!&ndash;<userCenter ref="user" your-name="my name"></userCenter>&ndash;&gt;-->
    <!--<div @click="getRef" style="width: 200px; height: 20px; background: red;"></div>-->
    <qjapi>
      <template slot="slot1">
        <h3>Slot1</h3>
        <p>This is slot1.</p>
      </template>
      <span slot="blogUrl">
        {{blogData.blogUrl}}
      </span>
      <span slot="blogName">
        {{blogData.blogName}}
      </span>
      <span slot="blogSkill">{{blogData.skill}}</span>
    </qjapi>
    <hr>
    <div class="example">
      <p>Original message: '{{msg}}'</p>
      <p>Computed reversed message: '{{reverseMsg}}'</p>
      <h3>v-model</h3>
      <p>文本框的值：{{ipt}}</p>
      <label>
        <input type="text" v-model.number="ipt">
      </label>
      <hr>
      <h3>v-model 文本域</h3>
      <label>
        <textarea cols="30" rows="10" v-model="msg"></textarea>
      </label>
      <div>
        <h4>单选框</h4>
        <p>gender is {{gender}}</p>
        <label>
          男：
          <input name="gender" type="radio" value="男" v-model="gender">
        </label>
        <label>
          女：
          <input name="gender" type="radio" value="女" v-model="gender">
        </label>
      </div>
      <div>
        <h4>多选框</h4>
        <p>选中的：{{checkedNames}}</p>
        <label>
          Toms：
          <input type="checkbox" value='Toms' v-model="checkedNames">
        </label>
        <label>
          Cindy：
          <input type="checkbox" value='Cindy' v-model="checkedNames">
        </label>
        <label>
          Vendors：
          <input type="checkbox" value='Vendors' v-model="checkedNames">
        </label>
      </div>
      <div>
        <h3>v-pre</h3>
        <p v-once>{{checkedNames}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import userCenter from './../pages/userCenter'
  import qjapi from './../components/QjApi'

  export default {
    name: 'HelloWorld',
    components: {
      userCenter,
      qjapi
    },
    computed: {
      reverseMsg() {
        return [...this.msg].reverse().join("");
      }
    },
    data() {
      return {
        ipt: 'value',
        isActive: true,
        hasError: true,
        checkedNames: [],
        gender: '女', //  男 or 女
        yourTitle: 'this is title',
        msg: 'this is message',
        list: ['val1', 'val2', 'val3', 'val4', 'val5'],
        propObj: {'a1': '1111', 'a2': '2222', 'a3': '333333333'},
        blogData: {
          blogUrl: 'http://www.baidu.com',
          blogName: 'baidu',
          skill: 'xxxx'
        }
      }
    },
    watch: {
      msg: function (val, oldVal) {
        console.log('oldVal', oldVal);
        console.log('newVal', val);
      }
    },
    methods: {
      changeVal(event) {
        this.msg = event.target.value;
        // this.propObj.a5 = this.msg;
        this.list[10] = this.msg;
        this.propObj = {s1: 'ssssss'}
      },
      changeYourName(params) {
        this.msg = params;
      },
      getRef() {
        // console.log(this.$refs.user.testProp);
        // document.getElementsByClassName('ha')[0].remove();
        // return this.$refs.user.testProp;
        this.$destroy();
      },
      jumpRouter() {
        this.$router.replace('userCenter?userid=002')
      }
    },
    beforeCreate() {
      console.group('beforeCreated');
      console.log('el: ', this.$el);
      console.log('data: ', this.msg);
      console.groupEnd('============');
    },
    created() {
      console.group('created');
      console.log('el: ', this.$el);
      console.log('data: ', this.msg);
      console.groupEnd('============');
    },
    beforeMount() {
      console.group('beforeMount');
      console.log('el: ', this.$el);
      console.log('data: ', this.msg);
      console.groupEnd('============');
    },
    mounted() {
      console.group('mounted');
      console.log('el: ', this.$el);
      console.log('data: ', this.msg);
      console.groupEnd('============');
    },
    beforeUpdate() {
      console.group('beforeUpdate');
      console.log('el: ', this.$el);
      console.log('data: ', this.msg);
      console.groupEnd('============');
    },
    updated() {
      console.group('updated');
      console.log('el: ', this.$el);
      console.log('data: ', this.msg);
      console.groupEnd();
    },
    beforeDestroy() {
      console.group('beforeDestroy');
      console.log('el: ', this.$el);
      console.log('data: ', this.msg);
      console.groupEnd();
    },
    destroyed() {
      console.group('destroyed');
      console.log('el: ', this.$el);
      console.log('data: ', this.msg);
      console.groupEnd('============');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .color {
    color: yellow;
  }

  .active {
    background: red;
  }

  .error {
    text-decoration: underline;
  }

  .router {
    width: 100%;
    height: 100px;
    margin-bottom: 50px;
  }
  [v-cloak]{
    display: none;
  }
</style>
