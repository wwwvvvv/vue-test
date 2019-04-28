<template>
    <div class="pos-ctn">
      <el-row class="pos-row">
        <el-col :span="7" class="pos-order">
          <el-tabs v-model="activeName">
            <el-tab-pane label="点餐" name="first">
              <el-table :data="tableData" border show-summary style="width: 100%">
                <el-table-column prop="goodsName" label="名称"></el-table-column>
                <el-table-column prop="goodsCount" label="数量"></el-table-column>
                <el-table-column prop="goodsPrice" label="金额"></el-table-column>
                <el-table-column label="操作">
                  <template scope="scope">
                    <el-button @click="delSingleGood(scope.row)" type="danger" size="small">删除</el-button>
                    <el-button @click="addGoods(scope.row)" type="primary" size="small">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="btn-group">
                <el-button type="warning">挂单</el-button>
                <el-button @click="delAllGoods" type="danger">删除</el-button>
                <el-button type="success">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
            <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="17" class="pos-goods">
          <div class="top-part">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul class="list-unstyled">
                <li class="goods-item" v-for="goodsItem in oftenGoodsList"
                    @click="addGoods({id: goodsItem.id, name: goodsItem.name, price: goodsItem.price})">
                  <span class="name">{{goodsItem.name}} </span>
                  <span class="price">￥{{goodsItem.price}}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-part">
            <div class="goods-type">
              <el-tabs>
                <el-tab-pane label="汉堡">
                  <div class="hamburger-ctn">
                    <ul class="cook-list list-unstyled">
                      <li class="cook-item" v-for="cookItem in type0Goods">
                        <span class="food-img">
                          <img :src="cookItem.img" alt="">
                        </span>
                        <span class="food-name">{{cookItem.name}}</span>
                        <span class="food-price">{{cookItem.price}}</span>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="小食">小食</el-tab-pane>
                <el-tab-pane label="饮料">饮料</el-tab-pane>
                <el-tab-pane label="套餐">套餐</el-tab-pane>
              </el-tabs>
              <!--<div class="circle"></div>-->
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Pos",
        created(){
          // axios.get('http://old.jspag.com/DemoApi/oftenGoods.php').then(res => {
          //   this.oftenGoodsList = res.dats;
          // }).catch(err => {
          //   console.log(err);
          //   alert('网络错误 不能访问');
          // })
        },
        mounted(){
          this.$nextTick(()=>{
            // var img=document.createElement('img');
            // img.setAttribute('src','../../../static/images/hamburger.png');
            // function handle(e) {
            //   var alpha = e.alpha, beta = e.beta, gamma = e.gamma;
            //   img.style.webkitTransform = "rotateZ(" + alpha + "deg) rotateX(" + beta + "deg) rotateY(" + gamma + "deg)";
            // }
            // document.body.appendChild(img);
            // window.addEventListener('deviceorientation',handle,false);
          })
        },
        data(){
          return {
            activeName: 'first',
            tableData: [
              // {
              //   goodsName: '可口可乐',
              //   goodsCount: 1,
              //   goodsPrice: 8
              // }, {
              //   goodsName: '香辣鸡腿堡',
              //   goodsPrice: 15,
              //   goodsCount:1
              // }, {
              //   goodsName: '爱心薯条',
              //   goodsPrice: 8,
              //   goodsCount:1
              // }, {
              //   goodsName: '甜筒',
              //   goodsPrice: 8,
              //   goodsCount:1
              // }
            ],
            oftenGoodsList: [
              {
                id:1,
                name:'香辣鸡腿堡',
                price:18
              }, {
                id:2,
                name:'田园鸡腿堡',
                price:15
              }, {
                id:3,
                name:'和风汉堡',
                price:15
              }, {
                id:4,
                name:'快乐全家桶',
                price:80
              }, {
                id:5,
                name:'脆皮炸鸡腿',
                price:10
              }, {
                id:6,
                name:'魔法鸡块',
                price:20
              }, {
                id:7,
                name:'可乐大杯',
                price:10
              }, {
                id:8,
                name:'雪顶咖啡',
                price:18
              }, {
                id:9,
                name:'大块鸡米花',
                price:15
              }, {
                id:20,
                name:'香脆鸡柳',
                price:17
              }
            ],
            type0Goods: [
              {
                img: '../../../static/images/hamburger.png',
                name: '香辣鸡腿堡',
                price: '￥20.00元'
              },{
                img: '../../../static/images/hamburger.png',
                name: '香辣鸡腿堡',
                price: '￥20.00元'
              },{
                img: '../../../static/images/hamburger.png',
                name: '香辣鸡腿堡',
                price: '￥20.00元'
              },{
                img: '../../../static/images/hamburger.png',
                name: '香辣鸡腿堡',
                price: '￥20.00元'
              },{
                img: '../../../static/images/hamburger.png',
                name: '香辣鸡腿堡',
                price: '￥20.00元'
              },{
                img: '../../../static/images/hamburger.png',
                name: '香辣鸡腿堡',
                price: '￥20.00元'
              },{
                img: '../../../static/images/hamburger.png',
                name: '香辣鸡腿堡',
                price: '￥20.00元'
              },{
                img: '../../../static/images/hamburger.png',
                name: '香辣鸡腿堡',
                price: '￥20.00元'
              }
            ]
          }
        },
        methods: {
          delAllGoods() {
            this.tableData = [];
          },
          delSingleGood({id}) {
            this.tableData = this.tableData.filter(item => {
              return id !== item.id;
            });
          },
          addGoods({id, name, price}) {
            console.log(id);
            let isHave = false;
            let tableData = this.tableData;
            for (let i = 0; i < tableData.length; i++) {
              if (tableData[i].id === id) {
                tableData[i].goodsCount++;
                isHave = true;
                break;
              }
            }
            if (!isHave) {
              this.tableData.push({
                goodsName: name,
                goodsCount: 1,
                goodsPrice: price,
                id: id
              });
            }
          },
          // addGoods2(param){
          //   console.log(param);
          // }
        }
    }
</script>

<style lang="scss" scoped>
  .list-unstyled{
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
  }
  .pos-ctn{
    height: 100%;
    .pos-row{
      height: 100%;
    }
    .pos-order{
      background-color: #f9fafc;
      border-right: 1px solid #c0ccda;
      .el-button{
        margin-right: 10px;
      }
      .el-button+.el-button{
        margin-left: 0;
        margin-top: 10px;
      }
    }
    .pos-goods{
      .title{
        width: 100%;
        padding: 10px 0;
        height: 40px;
        box-sizing: border-box;
        background-color: #f9fafc;
        border-bottom: 1px solid #d3dce6;
        /*text-align: left;*/
      }
      .often-goods-list{
        width: 100%;
        .goods-item{
          float: left;
          cursor: pointer;
          padding: 8px;
          border: 1px solid #e5e9f2;
          margin: 10px 0 0 10px;
          background-color: #fff;
          border-radius: 5px;
          font-size: 13px;
          .price{
            color: #42b983;
          }
        }
      }
    }
    .bottom-part{
      clear: both;
      box-sizing: border-box;
      padding-left: 13px;
      .cook-list{
        .cook-item{
          width: 25%;
          padding: 2px 2px 0;
          margin: 2px 20px 10px 2px;
          overflow: hidden;
          height: auto;
          font-size: 15px;
          border:1px solid #E5E9F2;
          border-radius: 5px;
          float: left;
        }
        span{
          display: block;
          float: left;
          /*width: 60%;*/
        }
        .food-img{
          width: 40%;
          /*padding-right: 5px;*/
          img{
            width: 86%;
          }
        }
        .food-name{
          padding-top: 10px;
          color: brown;
        }
        .food-price{
          padding-top: 5px;
        }
      }
    }
    /*.circle{*/
      /*width: 20px;*/
      /*height: 20px;*/
      /*background: red;*/
      /*border-radius: 50%;*/
    /*}*/
  }
</style>
