<template>
  <div class="post-list-wrapper">
    <div class="loading-ctn" v-if="isLoading">
      <span>Loading...</span>
    </div>
    <div class="post-list-ctn" v-else>
      <ul class="list-unstyled post-list">
        <li class="post-item" v-for="post in postList">
          <router-link :to="{name: 'user_info', params: {name: post.author.loginname}}" class="link">
            <img class="avatar" :src="post.author.avatar_url" alt="">
          </router-link>
          <span class="post-rate">{{post.reply_count}}/{{post.visit_count}}</span>
          <router-link :to="{name: 'post_content', params: {id: post.id, name: post.author.loginname }}"
                       class="link post-link">
            {{post.title}}
          </router-link>
          <span class="last-reply">{{post.last_reply_at | formatDate}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "PostList",
    data(){
      return {
        isLoading: true,
        postList: []
      }
    },
    beforeMount(){
      this.isLoading = true;
      this.getData();
    },
    methods: {
      getData(){
        axios({
          method: 'get',
          url: 'https://cnodejs.org/api/v1/topics',
          params: {
            page: 1,
            limit: 20
          }
        }).then((response) => {
          console.log(response);
          if (response.data.success === true) {
            this.postList = response.data.data;
            this.isLoading = false;
          } else {

          }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .post-list-wrapper {
    width: 100%;
    box-sizing: border-box;
    .loading-ctn {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      span {
        display: block;
        color: #fff;
        font-size: 18px;
        width: 100px;
        height: 30px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        margin: auto;
      }
    }
    .post-list-ctn {
      padding: 10px 50px 50px;
      box-sizing: border-box;
      background: rgba(221,221,221,1);
      .post-list{
        width: 100%;
        padding: 0 8px;
        background: #fff;
        box-sizing: border-box;
      }
      .post-item {
        width: 100%;
        /*height: 50px;*/
        /*height: 40px;*/
        box-sizing: border-box;
        padding: 8px 5px;
        display: block;
        line-height: 30px;
        border-bottom: 1px solid rgba(221,221,221,1);
        /*clear: both;*/
        /*margin: 10px;*/
        .avatar {
          width: 25px;
          height: 25px;
          float: left;
          white-space: nowrap;
          /*display: inline-block;*/
        }
        .post-rate{
          float: left;
          box-sizing: border-box;
          white-space: nowrap;
          font-size: 12px;
          vertical-align: bottom;
          line-height: 25px;
          width: 90px;
          margin: 0 10px;
          position: relative;
          top: 2px;
          /*display: inline-block;*/
        }
        .post-link {
          float: left;
          text-decoration: none;
          white-space: nowrap;
          line-height: 30px;
          display: inline-block;
          color: #000;
          max-width: 65%;
          text-overflow: ellipsis;
          overflow: hidden;
          box-sizing: border-box;
          font-size: 18px;
        }
        .last-reply {
          float: right;
          font-size: 12px;
          padding-right: 10px;
        }
      }
      .post-item::after{
        content: '';
        display: block;
        clear: both;
        height: 0;
      }
    }
  }
</style>
