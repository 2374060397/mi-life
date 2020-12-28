<template>
  <div class="container desktop">
    <div class="wrapper desktop">
      <div class="main">
        <div class="img-box box4">
          <div
            class="content"
            data-scrollama-index="0"
            style="opacity: 1; transform: none"
          >
            <h1 class="title">
              萌新报道，
              <br />全新儿童音色来啦！
            </h1>
            <p class="desc1">
              全新儿童音色“泡芙”，
              <br />所有用户都能在音色设置中选择使用。
              <br />如果开启儿童模式还能自动切换，
              <br />用儿童话术与小朋友聊天对话，一起玩耍。
              <br />
            </p>
            <div class="music-play">
              <button class="play"></button>
              <p class="music-desc">听一听，全新儿童音色</p>
            </div>
            <audio>
              <source
                src="https://cdn.cnbj1.fds.api.mi-img.com/miot-homepage-static/child.wav"
              />
            </audio>
          </div>
        </div>
        <div class="img-box box3">
          <div
            class="content"
            data-scrollama-index="0"
            style="opacity: 1; transform: none"
          >
            <h1 class="title">
              不仅听得出童声，
              <br />也听得到家长的心声。
            </h1>
            <p class="desc1">
              通过声音识别出儿童声音后，
              <br />主动过滤掉家长不希望孩子看到的内容，并推荐优质内容。
              <br />给孩子更健康的成长环境，家长带娃更省心。
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
      </div>
      <div class="more">
        <div class="more-btn">
          <span class="add">+</span>
        </div>
        <p class="more-desc">看看小爱同学的新能力</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  .wrapper {
    color: #fff;
    .main {
      .img-box {
        margin-top: 0.625rem;
        width: 43.75rem;
        height: 25rem;
        overflow: hidden;
        .content {
          .desc1 {
            line-height: 1.375rem;
            font-size: 0.75rem;
            font-weight: 400;
          }
        }
      }
      .img-box.box4 {
        background: linear-gradient(135deg, #9f56cb, #f988e7);
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          .title {
            text-align: center;
            font-size: 1.5625rem;
            font-weight: 500;
          }
          .desc1 {
            width: 21.3125rem;
            margin-top: 1.5rem;
            text-align: center;
          }
          .music-play {
            margin-top: 2.9375rem;
            border-radius: 1.25rem;
            background-color: #fff;
            padding: 0.3125rem;
            width: 13.4375rem;
            height: 2.5rem;
            position: relative;
            .music-desc {
              text-align: center;
              font-size: 0.625rem;
              font-weight: 500;
              display: inline-block;
              background: linear-gradient(-90deg, #c46bd7, #c46bd7);
              color: transparent;
              background-clip: text;
              -webkit-background-clip: text;
              font-size: 0.875rem;
              position: absolute;
              top: 0.8125rem;
              margin: 0 0 0 0.875rem;
            }
            .play {
              width: 1rem;
              height: 1rem;
              border-color: transparent transparent transparent #c46bd7;
              border-style: solid;
              border-width: 0.5rem 0 0.5rem 0.7rem;
              transition: all 0.5s ease;
              margin-left: 1.25rem;
              margin-top: 0.455rem;
              padding: 0;
              cursor: pointer;
              background-color: #fff;
              box-sizing: border-box;
              outline: none;
            }
          }
        }
      }
      .img-box.box3 {
        background: url(//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/child.f6fcb54.png);
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          .title {
            text-align: center;
          }
          .desc1 {
            color: #fff;
            font-size: 0.8125rem;
            width: 21.3125rem;
            margin-top: 1.5rem;
            text-align: center;
          }
          .play-btn {
            margin-top: 2.1875rem;
            text-align: center;
            .icon {
              cursor: pointer;
              width: 3.75rem;
              height: 3.75rem;
            }
          }
        }
      }
    }
  }
}
.more{
   margin-top: 3.1875rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #3a8dfe; 
    .more-btn{
        cursor: pointer;
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 50%;
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        .add{
            font-size: 2.8125rem;
            font-weight: 300;
        }
    }
    .more-desc{
        margin-top: 1rem;
        margin-bottom: 3.1875rem;
        font-size: .8125rem;
        font-weight: 500;
    }
}
</style>