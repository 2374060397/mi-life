<template>
  <div class="detail-page desktop video">
    <div class="container1">
      <div class="wrapper mi-video">
        <video
          controls="controls"
          width="1000"
          autoplay="autoplay"
          src="blob:https://xiaomishare.mi.com/a8bcebb6-ade9-43f2-a815-f8488ee12aba"
          style="object-fit: cover"
        ></video>
      </div>
      <!---->
      <!---->
      <!---->
      <!---->
      <!---->
      <!---->
    </div>
    <div class="close-box">
      <div class="close-btn" @click="CloseVideo">
        <span class="close">×</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    name: 'Video',
    methods:{
      ...mapMutations(['CloseVideo'])
  }
};
</script>

<style lang="less" scoped>
.detail-page.video {
  background: rgba(0, 0, 0, 0.1);
}
.detail-page {
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
  .mi-video {
    border-color: #000;
    width: 100vw;
    height: 100vh;
    display: flex;
    background: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    min-width: 19.3125rem;
  }
  .close-box {
    position: fixed;
    bottom: -3.125rem;
    z-index: 99;
    text-align: center;

    .close-btn {
      cursor: pointer;
      display: inline-block;
      width: 3.125rem;
      height: 3.125rem;
      border-radius: 50%;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 3.25rem;
      margin-bottom: 5.125rem;
      .close {
        font-size: 2rem;
        font-weight: 400;
        color: #3a8dff;
      }
    }
  }
}
</style>