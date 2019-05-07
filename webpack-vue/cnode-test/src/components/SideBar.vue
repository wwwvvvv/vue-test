<template>
  <div class="sidebar-ctn">
    <div class="loading-ctn" v-if="isLoading">
      <span>Loading...</span>
    </div>
    <div v-else class="sidebar">
      <div class="part-item author-info-part">
        <p class="title">作者</p>
        <router-link :to="{name: 'user_info', params:{name: userInfo.loginname}}">
          <img class="author-pic" :src="userInfo.avatar_url" alt="">
        </router-link>
        <span class="author-name">{{userInfo.loginname}}</span>
        <p class="user-point">积分：{{userInfo.score}}</p>
      </div>
      <div class="part-item author-theme-part">
        <p class="title">作者最近主题</p>
        <ul class="theme-list list-unstyled">
          <li class="theme-item" v-for="(topic, index) in recentTopics">
            <router-link :to="{name: 'post_content', params: {id: topic.id, name: topic.author.loginname }}">
              {{topic.title}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="part-item author-reply-part" v-if="recentReplies.length > 0">
        <p class="title">作者最近回复</p>
        <ul class="reply-list list-unstyled">
          <li v-for="(reply,index) in recentReplies" class="reply-item">
            <router-link :to="{name: 'post_content', params: {id: reply.id, name: reply.author.loginname}}">
              {{reply.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "sideBar",
    data(){
      return {
        isLoading: true,
        userInfo: {},
        recentTopics: [],
        recentReplies: []
      }
    },
    beforeMount(){
      this.getData();
    },
    methods:{
      getData() {
        axios({
          method: 'get',
          url: `https://cnodejs.org/api/v1/user/${this.$route.params.name}`
        }).then((response) => {
          if (response.data.success === true) {
            // this.postList = response.data.data;
            this.userInfo = response.data.data;
            this.recentTopics = this.userInfo.recent_topics.slice(0, 5);
            this.recentReplies = this.userInfo.recent_replies.slice(0, 5);
            this.isLoading = false;
          } else {
            // userInfo
            alert('返回数据错误！')
          }
        });
      }
    },
    watch: {
      '$route': 'getData'
    }
  }
</script>

<style lang="scss" scoped>
  .loading-ctn {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    text-align: left;
    /*background: rgba(0, 0, 0, 0.3);*/
    background: rgba(221,221,221,1);
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
  .sidebar-ctn {
    width: 30%;
    height: 30px;
    position: absolute;
    right: 0;
    padding-right: 10px;
    top: 62px;
    background: rgba(221, 221, 221, 1);
    .sidebar {
      /*background-color: #fff;*/
      box-sizing: border-box;
      width: 100%;
      /*height: 20px;*/
      .part-item {
        width: 100%;
        background-color: #fff;
        padding-bottom: 10px;
        margin-bottom: 10px;
        .title {
          width: 100%;
          text-align: left;
          padding: 12px;
          background-color: rgba(212, 205, 205, 0.17);
          font-size: 12px;
          color: #000;
          margin: 0;
          /*height: */
        }
      }
      .author-info-part{
        text-align: left;

        .author-pic{
          width: 60px;
          padding-left: 12px;
          display: inline-block;
          padding-top: 10px;
        }
        .author-name{
          display: inline-block;
          color: #a8a3a3;
          font-size: 20px;
          vertical-align: top;
          padding: 36px 0 0 15px;
        }
        .user-point{
          padding: 10px 0 0 12px;
          /*padding-left: 12px;*/
          font-size: 13px;
          margin: 0;
        }
      }
      .author-theme-part,.author-reply-part{
        .list-unstyled{
          list-style: none;
          border: 0;
          margin: 0;
          padding: 10px 0 0 12px;
          a{
            text-decoration: none;
            color: #a8a3a3;
            font-size: 12px;
            text-align: left;
            width: 100%;
            display: inline-block;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .theme-item,.reply-item{
            padding: 2px 0 4px 0;
          }
        }
      }
    }
  }
</style>
