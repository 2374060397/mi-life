<template>
  <div class="detail-page desktop">
    <div class="">
      <!---->
      <!---->
      <!---->
      <div class="wrapper mi-enjoy">
        <div class="container1">
          <h1 class="title">手表遥控手机，<br />自拍合拍，都更合拍。</h1>
          <p class="sub">
            手表查看手机取景，所见即得一目了然。<br />隔空遥控自拍，再多人都能入镜，自拍更自由，合影更合拍。
          </p>
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/watch.7376ac1.png"
            alt=""
            class="top-img"
          />
          <h1 class="title">手机照片直投电视，<br />大屏看清小细节。</h1>
          <p class="sub">
            手机图片一键投屏，自由缩放，<br />
            幻灯片模式播放呈现像素级沉浸观赏体验。<br />支持文档定制投屏，办公更从容。
          </p>
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mac.a30bf13.png"
            alt=""
            class="bot-img"
          />
        </div>
      </div>
    </div>
    <div class="close-box">
      <div class="close-btn" @click="closeDetail_page">
        <span class="close">×</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'DetailPage',
    methods:{
        ...mapMutations(['closeDetail_page'])
    }
};
</script>

<style lang="less" scoped>
.detail-page{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #e6e6e6;
    z-index: 999;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    .mi-enjoy{
        position: relative;
        min-width: 19.3125rem;
        .container1{
            display: flex;
            align-items: center;
            flex-direction: column;
            h1,p{
                margin: 0;
            }
            .title{
                color: #181818;
                font-size: 1.666875rem;
                font-weight: 600;
                margin-top: 4.6875rem;
                margin-bottom: 1.25rem;
                text-align: center;
                
            }
            .sub{
                color: #666;
                line-height: 1.3125rem;
                font-size: .84375rem;
                text-align: center;
            }
            .top-img{
                width: 21.375rem;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 3.0625rem;
            }
            .bot-img{
                width: 40.625rem;
                height: 23.125rem;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 3.75rem 0 15.625rem -1.875rem;
            }
        }
    }
    .close-box{
        position: fixed;
        bottom: -3.125rem;
        z-index: 99;
        text-align: center;
        .close-btn{
            cursor: pointer;
            display: inline-block;
            width: 3.125rem;
            height: 3.125rem;
            border-radius: 50%;
            box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 3.25rem;
            margin-bottom: 5.125rem;
            .close{
                font-size: 2rem;
                font-weight: 400;
                color: #3a8dff;
            }
        }
    }
}
</style>