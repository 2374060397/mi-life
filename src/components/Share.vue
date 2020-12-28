<template>
  <div class="pc-components">
    <div id="mi-global-enjoy" class="nav-achor"></div>
    <div class="container desktop">
      <div class="wrapper desktop">
        <div class="top-context">
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/icon1.a78d8da.png"
            alt=""
          />
        </div>
        <div class="main">
          <div class="img-box box1">
            <div
              class="content"
              data-scrollama-index="0"
              style="opacity: 1; transform: none"
            >
              <h1 class="title">碰一下，音乐继续。</h1>
              <p class="desc1">
                手机轻碰音箱，音乐传过去。
                <br />再次轻碰，音乐传回来，无论在哪， <br />旋律一直在身边。
              </p>
            </div>
          </div>
          <div class="img-box box2">
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/device1.97c95a7.png"
              alt=""
            />
            <div
              class="content"
              data-scrollama-index="0"
              style="opacity: 1; transform: none"
            >
              <h1 class="title">下一屏，精彩不停。</h1>
              <p class="desc1">
                手机里正在看的视频, 也能轻松转到
                <br />电视上继续播放。
              </p>
            </div>
          </div>
          <div class="img-box box3">
            <div
              class="content"
              data-scrollama-index="0"
              style="opacity: 1; transform: none"
            >
              <h1 class="title">视频通话，自在转接。</h1>
              <p class="desc1">
                笔记本、音箱、手机，想用谁接就用谁接; 手机通话过程中，
                <br />还可以一键转接到音箱继续聊。支持用小爱同学语音接听，
                <br />腾出双手去做更多事。
              </p>
              <div class="play-btn">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/play.19f323c.png"
                  alt=""
                  class="icon"
                />
              </div>
              <!---->
            </div>
          </div>
          <div class="img-box box4">
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-left-pc.de86dc8.png"
              alt=""
            />
            <div
              class="content"
              data-scrollama-index="0"
              style="opacity: 1; transform: none"
            >
              <h1 class="title">
                手机、笔记本跨屏协作,
                <br />1+1不止大于2。
              </h1>
              <div class="desc-content">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-arrow-green.1181816.png"
                  alt=""
                  class="icon"
                />
                <p class="sub">手机图片，直接拖到笔记本的PPT上使用</p>
              </div>
              <div class="desc-content">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-arrow-green.1181816.png"
                  alt=""
                  class="icon"
                />
                <p class="sub">手机文档，直接用笔记本打开、编辑和保存</p>
              </div>
              <div class="desc-content">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-arrow-green.1181816.png"
                  alt=""
                  class="icon"
                />
                <p class="sub">笔记本剪好的视频，直接拖拽分享发抖音</p>
              </div>
              <div class="desc-content">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-arrow-green.1181816.png"
                  alt=""
                  class="icon"
                />
                <p class="sub">笔记本支持手机双屏同开，多任务同时进行</p>
              </div>
            </div>
          </div>
        </div>
        <div class="more">
          <div class="more-btn" @click="showDetail_page">
            <span class="add">+</span>
          </div>
          <p class="more-desc">发现更多小米妙享功能</p>
        </div>
      </div>
      <!-- 点击更多按钮显示新的详细页面  -->
      <Detail v-if="detail_page" />
    </div>
    <!-- 因为下面的样式基本一样，所以样式差不多的我一般都不会再写了 -->
    <div id="mi-global-ecological" class="nav-achor"></div>
    <Scroll />
    <Child />
    <Goods />
    <!-- <div style="height: 1000px"></div> -->
  </div>
</template>

<script>
import Scroll from './Scroll'
import Child from './Child'
import Goods from './Goods'
import Detail from './Detail_Page'
import { mapState, mapMutations } from 'vuex'


export default {
  name:"Share",
  components:{
    Scroll,
    Child,
    Goods,
    Detail
  },
  computed:{
    ...mapState(["detail_page"]),
  },
  methods:{
        ...mapMutations(['showDetail_page'])
    }
};
</script>

<style lang="less" scoped>
.container {
  .wrapper {
    color: #fff;
    .top-context {
      margin-top: 6.25rem;
      margin-bottom: 0.9375rem;
      img {
        width: 10.9375rem;
      }
    }
    .main {
      .img-box {
        margin-top: 0.625rem;
        width: 43.75rem;
        height: 25rem;
        overflow: hidden;
        .title {
          font-size: 1.5625rem;
          font-weight: 500;
        }
      }
      .desc1 {
        line-height: 1.375rem;
        font-size: 0.75rem;
        font-weight: 500;
      }

      .img-box.box1 {
        background: url(//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/touch.e59e285.png);
        background-color: #fff;
        background-size: cover;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .content {
          margin-left: 2.25rem;
          .title {
            color: #000;
          }
          .desc1 {
            color: #666;
            margin-top: 1.1875rem;
          }
        }
      }
      .img-box.box2 {
        background-color: #fff;
        background-size: cover;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          width: 20.9375rem;
          margin-bottom: -6.1875rem;
        }
        .content {
          margin-left: 2.6875rem;
          .title {
            color: #000;
          }
          .desc1 {
            color: #666;
            width: 14.875rem;
            margin-right: 2.8125rem;
            margin-top: 1.5rem;
          }
        }
      }
      .img-box.box3 {
        background: url(//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/wall1.cc618f7.png);
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
          display: inline;
          text-align: center;
          .title {
            font-size: 1.5625rem;
            font-weight: 500;
          }
          .desc1 {
            width: 21.3125rem;
            margin-top: 1.5rem;
          }
          .play-btn {
            margin-top: 2.1875rem;
            text-align: center;
            cursor: pointer;
            .icon {
              width: 3.75rem;
              height: 3.75rem;
            }
          }
        }
      }
      .img-box.box4 {
        background-color: #fff;
        display: flex;
        justify-content: flex-start;
        img {
          margin-top: 1.25rem;
          width: 20.8125rem;
          height: 22.8125rem;
        }
        .content {
          flex: 1;
          margin-left: 3.4375rem;
          .title {
            margin-top: 5.1875rem;
            margin-bottom: 2.1875rem;
            color: #000;
            letter-spacing: -1px;
          }
          .desc-content {
            position: relative;
            width: 100%;
            height: 1.5625rem;
            color: #000;
            .icon {
              position: absolute;
              top: -1.25rem;
              width: 0.8125rem;
              height: 0.8125rem;
            }
            .sub {
              position: absolute;
              top: 0;
              left: 1.375rem;
              display: inline;
              color: #181818;
              font-size: 0.75rem;
              line-height: 0.9375rem;
              font-weight: 400;
            }
          }
        }
      }
    }
    .more {
      margin-top: 3.1875rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #3a8dfe;
      .more-btn {
        cursor: pointer;
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 50%;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        .add {
          font-size: 2.8125rem;
          font-weight: 300;
        }
      }
      .more-desc {
        margin-top: 1rem;
        margin-bottom: 3.1875rem;
        font-size: 0.8125rem;
        font-weight: 500;
      }
    }
  }
}
</style>