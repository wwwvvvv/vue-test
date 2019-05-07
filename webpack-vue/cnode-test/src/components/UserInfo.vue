<template>
  <div class="userinfo-ctn">
    <div class="userinfo-part part-item">
      <img class="avatar" :src="userInfo.avatar_url" alt="">
      <span class="user-name">{{userInfo.loginname}}</span>
      <p>积分：{{userInfo.score}}</p>
      <p>注册时间：{{userInfo.create_at | formatDate}}</p>
    </div>
    <div class="part-item topic-part">
      <p class="title">回复的主题</p>
      <ul class="topic-list list-unstyled">
        <li class="reply-item item" v-for="(reply, index) in userInfo.recent_replies">
          <router-link :to="{name: 'post_content', params: {id: reply.id, name: reply.author.loginname}}">
            {{reply.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="part-item reply-part">
      <p class="title">创建的主题</p>
      <ul class="reply-list list-unstyled">
        <li v-for="(topic, index) in userInfo.recent_topics" class="topic-item item">
          <router-link :to="{name: 'post_content', params: {id: topic.id, name: topic.author.loginname}}">{{topic.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "UserInfo",
    data(){
      return{
        userInfo: {}
      }
    },
    beforeMount(){
      axios({
        method: 'get',
        url: `https://cnodejs.org/api/v1/user/${this.$route.params.name}`
      }).then((res) => {
        // console.log(res.data.data);
        this.userInfo = res.data.data;
      });
    }
  }
</script>

<style scoped lang="scss">
  .userinfo-ctn{
    background: rgba(221, 221, 221, 1);
    overflow: hidden;
    padding-bottom: 30px;
    .part-item{
      width: 75%;
      background-color: #fff;
      margin: 10px auto 20px auto;
      p{
        margin: 0;
        font-size: 18px;
        line-height: 32px;
      }
      .avatar {
        width: 120px;
        padding-top: 10px;
      }
      .user-name{
        padding-left: 10px;
      }
      .title {
        width: 100%;
        text-align: left;
        padding: 8px 12px;
        background-color: rgba(212, 205, 205, 0.17);
        font-size: 13px;
        color: #000;
        margin: 0;
        /*height: */
      }

      .list-unstyled{
        list-style: none;
        border: 0;
        margin: 0;
        padding: 10px 0 0 12px;
        a{
          text-decoration: none;
          color:#094E99;
          font-size: 12px;
          text-align: left;
          width: 100%;
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .item{
          padding: 6px 0;
        }
        /*.theme-item,.reply-item{*/
          /*padding: 2px 0 4px 0;*/
        /*}*/
      }
    }

  }
</style>
