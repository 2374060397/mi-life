<template>
  <div class="page-container desktop">
    <div class="menu-bar desktop" v-if="navBar_acive">
      <div class="item panl-slogan active-slo">
        <div class="hover-pictures p1"></div>
        <span class="title">智能生活</span>
      </div>
      <div class="item panl-Share">
        <div class="hover-pictures p2"></div>
        <span class="title">小米妙享</span>
      </div>
      <div class="item panl-smart">
        <div class="hover-pictures p3"></div>
        <span class="title">小米智能</span>
      </div>
      <div class="item panl-ecol">
        <div class="hover-pictures p4"></div>
        <span class="title">小爱同学</span>
      </div>
    </div>
    <div class="container desktop">
      <div class="outer">
        <div class="wrapper">
          <div>
            <h1 class="title">小米智能生活</h1>
            <div class="sub_title">好简单</div>
          </div>
          <div class="play-btn" @click="showVideo">
            <img src="../../assets/imgs/play.png" alt="" class="icon" />
          </div>
          <div class="desc" style="font-size: 0.875rem">
            好科技，为生活，更人性。
          </div>
        </div>
      </div>
      <Video  v-if="video_Show" />
      <!---->
    </div>
    <div>
      <Share />
    </div>
  </div>
</template>

<script>
// Share 为主组件页面
import Share from "@/components/Share";
import Video from "@/components/Video";

import { mapState, mapMutations } from "vuex";
export default {
  name: "pagecontainer",
  components: {
    Share,
    Video
  },
  computed: {
    ...mapState(["navBar_acive","video_Show"]),
  },
  created() {
    console.log(this.$store.state.navBar_acive);
  },
  methods:{
      ...mapMutations(['showVideo'])
  }
};
</script>

<style lang="less" scoped>
.page-container {
  min-height: 100vh;
  .menu-bar.desktop,
  .menu-bar.tablet,
  .menu-bar.tablet {
    display: flex;
    position: fixed;
    z-index: 5;
    top: 7vh;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: #fff;
    .item {
      cursor: pointer;
      position: relative;
      margin: 0;
      width: 25vw;
      min-width: 12.5rem;
      overflow: hidden;
      border-right: 1px solid #e5e5e5;
      border-top: 1px solid #e5e5e5;
      .title {
        position: absolute;
        color: #1b1b1b;
        font-size: 3.0625rem;
        width: 3.125rem;
        height: 14.5rem;
        font-weight: 100;
        top: 2.375rem;
        left: 2.5rem;
        left: 40px;
      }
    }
    .item.active-slo .hover-pictures {
      opacity: 1;
    }
    .item.active-slo .title {
      color: #fff;
    }
    .item .p1 {
      left: -9.375rem;
    }
    .item .hover-pictures {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
      transition: opacity 0.8s;
    }
    .item:hover .hover-pictures {
      opacity: 1;
    }
    .hover-pictures.p1 {
      background-image: url("../../assets/imgs/p1.png");
    }
    .hover-pictures.p2 {
      background-image: url("../../assets/imgs/p2.png");
    }
    .hover-pictures.p3 {
      background-image: url("../../assets/imgs/p3.png");
    }
    .hover-pictures.p4 {
      background-image: url("../../assets/imgs/p4.png");
    }

    // .hover-pictures.p3{
    //   background-image: url('../../assets/imgs/p1.png');
    // }
    // .hover-pictures.p4{
    //   background-image: url('../../assets/imgs/p1.png');
    // }
  }
  // .menu-bar.desktop .item .title,
  // .menu-bar.tablet .item .title,
  // .menu-bar.tablet .item .title {
  //   position: absolute;
  //   color: #1b1b1b;
  //   font-size: 3.0625rem;
  //   width: 3.125rem;
  //   height: 14.5rem;
  //   font-weight: 200;
  //   top: 2.375rem;
  //   left: 2.5rem;
  //   left: 40px;
  // }
  .menu-bar.mobile {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 4;
    top: 7vh;
    background-color: #fefefe;
    .item {
      height: 23.25vh;
      font-size: 1.6875rem;
      position: relative;
      overflow: hidden;
    }
  }
}
.container {
  width: 100%;
  height: 40.625rem;
  min-height: 100vh;
  background-size: cover;
  .outer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
      width: 80vw;
      height: 40vh;
      color: #fff;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-between;
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      .title {
        font-size: 1.5625rem;
        font-weight: 500;
      }
      .sub_title {
        font-size: 5.5rem;
        font-weight: 100;
        margin-top: -0.625rem;
      }
      .play-btn {
        .icon {
          cursor: pointer;
          width: 3.5625rem;
          height: 3.5625rem;
          margin-top: 3.125rem;
          margin-bottom: 2.5rem;
        }
      }
    }
  }
  
 
}
.container.desktop {
  background-image: url("../../assets/imgs/main_img.png");
}
</style>