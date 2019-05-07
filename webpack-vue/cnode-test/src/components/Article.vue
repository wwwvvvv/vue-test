<template>
  <div class="article-ctn">
    <div class="loading-ctn" v-if="isLoading">
      <span>Loading...</span>
    </div>
    <div v-else class="article">
      <h1 class="title">{{postInfo.title}}</h1>
      <ul class="list-unstyled info-list">
        <li class="info-item">• 分类:{{postTab}}</li>
        <li class="info-item">• {{postInfo.visit_count}}次访问</li>
        <li class="info-item">• 发布于:{{postInfo.create_at | formatDate}}</li>
        <li class="info-item">
          • 作者:
          <router-link class="link author-link" :to="{name: 'user_info', params: {name: postInfo.author.loginname}}">{{postInfo.author.loginname}}</router-link>
        </li>
      </ul>
      <div v-html="postInfo.content" class="content" id="content">
        <!--<h2>前言</h2>-->
      </div>
      <div class="reply-ctn">
        <div class="reply-item" v-for="(reply, index) in postInfo.replies">
          <div class="reply-top">
            <div class="lpart">
              <router-link :to="{name: 'user_info', params: {name: reply.author.loginname}}">
                <img class="reply-avatur" :src="reply.author.avatar_url" alt="">
              </router-link>
              <router-link :to="{name: 'user_info', params: {name: reply.author.loginname}}">
                <span class="reply-name">{{reply.author.loginname}}</span>
              </router-link>
              <span class="reply-idx">{{index + 1}}楼</span>
            </div>
            <div class="rpart" v-if="reply.ups.length > 0">
              <span class="heart">❤ </span>{{reply.ups.length}}
            </div>
          </div>
          <div v-html="reply.content" class="reply-ctn"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Article",
    data() {
      return {
        isLoading: true,
        postInfo: {
          // visitCount: 0,
          // create_at: Date.now(),
          // author: {
          //   loginname: ''
          // }
        }
        // loginname: '',
        // visitCount: 0,
        // articleType: ''
      }
    },
    computed:{
      postTab(){
        if(this.postInfo.tab === 'share') {
          return '分享'
        }
      }
    },
    beforeMount() {
      this.getData();
    },
    methods: {
      getData(){
        axios({
          method: 'get',
          // `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`
          url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,
          params: {
            mdrender: true
          }
        }).then((res) => {
          // console.log(res);
          if (res.data.success) {
            this.postInfo = res.data.data;
            this.isLoading = false;
            // console.log(this.postInfo.replies)
            // this.loginname = postInfo.author.loginname;
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    watch: {
      '$route': 'getData'
    }
  }
</script>

<style lang="scss">
  .article-ctn {
    width: 100%;
    padding: 13px 40px 50px;
    box-sizing: border-box;
    background: rgba(221,221,221,1);
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
    .article{
      width: 69%;
      height: 100%;
      min-height: 100%;
      padding: 5px 40px 50px;
      box-sizing: border-box;
      background-color: #fff;
      /*background: rgba(221,221,221,1);*/
      .title{
        font-size: 18px;
        text-align: left;
      }
      .link{
        text-decoration: none;
        color: #a8a3a3;
      }
      .info-list::after{
        content: ' ';
        display: inline-block;
        width: 0;
        height: 0;
        clear: both;
      }
      .content{
        text-align: left;
        font-size: 18px;
        .markdown-text {
          /*padding: 50px;*/
          font-size: 18px;
          h2 {
            padding-bottom: 10px;
            font-size: 36px;
            margin-top: 50px;
            border-bottom: 1px solid #eee;
          }
          a{
            text-decoration: none;
            color: #4183c4;
          }
          blockquote{
            margin: 0;
            padding: 0 15px;
            color: #777;
            border-left: 4px solid #ddd;
          }
          pre{
            padding: 15px;
            overflow: auto;
            background-color: #000;
            code{
              color: #fff;
            }
          }
          img{
            max-width: 100%;
          }
        }
      }
      .reply-ctn{
        margin-top: 10px;
        .heart{
          color: red;
        }
        .reply-item{
          .reply-top{
            width: 100%;
            .lpart{
              float: left;
              img{
                width: 24px;
                height: 24px;
              }
              .reply-name,.reply-idx{
                line-height: 24px;
                display: inline-block;
                vertical-align: super;
              }
            }
            .rpart{
              float: right;
            }

          }
          .reply-top::after{
            display: block;
            content: ' ';
            width: 0;
            height: 0;
            clear: both;
          }
          .reply-ctn{
            p {
              margin: 0;
              text-align: left;
              text-indent: 30px;
            }
            font-size: 18px;
            color: #000;
          }
          padding: 15px;
          border-bottom: 1px solid #ccc;
        }
      }
    }
    .list-unstyled{
      list-style: none;
      .info-item{
        float: left;
        font-size: 12px;
        color: #a8a3a3;
        padding-right: 10px;
      }
    }
  }
</style>
