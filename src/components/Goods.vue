<template>
  <div class="box">
    <div class="container">
      <div
        class="title"
        data-scrollama-index="0"
        style="opacity: 1; transform: none"
      >
        <span>智选设备</span>
        <p>建议选择最新的小米智能设备</p>
        <p>以获得更好的简单智能生活体验</p>
      </div>
      <div class="swiper-container">
        <div class="main-box">
          <div
            class="swiper-wrap"
            :style="{
              transform: ' translateX(' + transform_goodsX + 'px)',
              translateZ: '0px',
              transitionDuration: '500ms',
            }"
          >
            <div class="swiper-slide">
              <div class="img-container">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-phone-pc5.2ef4aa9.png"
                  alt=""
                />
              </div>
              <div class="img-text">
                <span>小米10至尊纪念版</span>
                <a class="text-btn">了解更多</a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img-container img-tv">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-phone-pc7.c5712ab.png"
                  alt=""
                />
              </div>
              <div class="img-text">
                <span>小米电视大师 65 OLED</span>
                <a class="text-btn">了解更多</a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img-container">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-device2.e907c42.png"
                  alt=""
                />
              </div>
              <div class="img-text">
                <span>小米小爱音箱Art</span>
                <a class="text-btn">了解更多</a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img-container">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-pc3.4d93a3c.png"
                  alt=""
                />
              </div>
              <div class="img-text">
                <span>小米小爱触屏音箱Pro 8</span>
                <a class="text-btn">了解更多</a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img-container">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/iwatch.481f182.png"
                  alt=""
                />
              </div>
              <div class="img-text">
                <span>小米手表</span>
                <a class="text-btn">了解更多</a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img-container img-redmi">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-phone-pc6.e5e26ee.png"
                  alt=""
                />
              </div>
              <div class="img-text">
                <span>RedmiBook13</span>
                <a class="text-btn">了解更多</a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img-container img-router">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/irouter.dadad78.png"
                  alt=""
                />
              </div>
              <div class="img-text">
                <span>Redmi路由器 AX6</span>
                <a class="text-btn">了解更多</a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img-container img-pengt">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/pengt.2622b95.png"
                  alt=""
                />
              </div>
              <div class="img-text">
                <span>小米碰碰贴2</span>
                <a class="text-btn">了解更多</a>
              </div>
            </div>
          </div>
        </div>
        <div class="left" @click="left">
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-arrow1.80e50c8.png"
            alt=""
            :class="is_Acitive ? 'isClick' : ''"
          />
        </div>
        <div class="right" @click="right">
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-arrow2.5628898.png"
            alt=""
            :class="is_Acitive2 ? 'isClick' : ''"
          />
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div
        class="top-context"
        data-scrollama-index="0"
        style="opacity: 1; transform: none"
      >
        <span class="title2">声明与说明</span>
        <div class="text-content">
          <p>
            1、本站中所展示功能界面仅供参考，实际呈现效果以实际所提供版本为准；我们将不断更新和优化我们的功能和服务，不再另做说明
          </p>
          <p>2、本站所披露相关信息仅适用于小米MIUI手机系统及部分互联网应用</p>
          <p>
            3、本站部分功能和服务可能因系统版本、手机型号、设备型号等不同存在差异，请以实际为准
          </p>
          <p>
            4、部分产品和服务仅适用于中国大陆地区，其他国家和地区相关信息请以当地销售的产品为准
          </p>
          <p>
            5、小米妙享·音乐接力功能将于2020年9月30日启动公测，目前仅支持小米10至尊纪念版(需升级至MIUI12最新版，并将“小米互联通信服务”升级到1.3.0及以上)、小米小爱音箱Art（需升级至固件1.58.10以上），更多功能请
            <a href="https://www.xiaomi.cn/post/21426755" target="_blank"
              >点击小米社区查看</a
            >
          </p>
          <p>
            6、小米妙享·视频接力：该功能目前支持小米10至尊纪念版、小米10系列、Redmi
            K30系列、小米9系列、小米MIX3、小米MIX2s、小米MIX2（MIUI
            11及以上系统版本，将“小米互联通信服务”升级到1.3.0以上版本，同时安装小米视频App）、小米电视大师65英寸OLED（需升级ROM）、小米电视4A/C/S/X系列电视、小米全面屏电视系列电视（播放器、米联、小米互联通信服务更新至最新版本）。本功能预计于2020年11月上线，更多支持机型，请
            <a href="https://www.xiaomi.cn/post/21508912" target="_blank"
              >点击小米社区查看</a
            >
          </p>
          <p>
            7、小米妙享·视频通话接力：该功能目前支持小米10至尊纪念版、小米10系列、Redmi
            K30系列、小米9系列、小米MIX3、小米MIX2s、小米MIX2（MIUI
            11及以上系统版本，将“小米互联通信服务”升级到1.3.0以上版本，同时安装小米通话App）、小米小爱触屏音箱Pro
            8、Redmi小爱触屏音箱
            8英寸等。本功能预计于2020年9月30日上线，更多支持机型请
            <a href="https://www.xiaomi.cn/post/21538031" target="_blank"
              >点击小米社区查看</a
            >
          </p>
          <p>
            8、小米妙享·跨屏协作功能目前支持的设备有小米10至尊纪念版，小米笔记本Pro
            15
            2020款，更多机型将会陆续开放支持。手机端开发版预计于2020年9月跟随机型内测版本上线，稳定版预计于2020年10月跟随系统更新上线。用户需确认手机端“小米互联通信服务”已升级到1.3.0以上版本，并将电脑端“智能互联”软件升级至2.0.0.0以上版本，更多功能请
            <a href="https://www.xiaomi.cn/board/21465455" target="_blank"
              >点击小米社区查看</a
            >
          </p>
          <p>
            9、小米妙享·图片接力功能预计10月底上线，目前支持的设备有小米10
            至尊纪念版与和小米电视大师65英寸OLED。请将手机和电视系统升级至最新版本，并在小米手机应用商店下载最新版相册、投屏、投屏服务、小米互联通信服务四个应用。更多支持机型请
            <a href="https://www.xiaomi.cn/board/5775852" target="_blank"
              >点击小米社区查看</a
            >
          </p>
          <p>
            10、手表遥控手机拍照功能在小米10至尊纪念版、小米手表上支持，小米10至尊纪念版预计10月内开发版上线、稳定版本预计11月内发布。用户需要将小米10至尊纪念版ROM升级，并将“小米互联通信服务”升级到1.3.0以上，小米手表随2020年9月固件升级至最新、小米穿戴app升级到1.1.70及以上版本使用，更多机型陆续支持中，请
            <a href="https://www.xiaomi.cn/post/21439373" target="_blank"
              >点击小米社区查看</a
            >
          </p>
          <p>
            11、智能生活控制中心目前支持的设备有：2020年9月以后升级至MIUI开发版的安卓Q以上机型，稳定版将于2020年10月跟随系统更新升级至小米10至尊纪念版、Redmi
            K30
            至尊纪念版，更多机型将会陆续开放支持。用户需在手动到设置中打开控制中心，并将米家App升级至5.8.15以上版本，更多功能请
            <a href="https://www.xiaomi.cn/board/19390038" target="_blank"
              >点击小米社区查看</a
            >
          </p>
          <p>
            12、畅快连支持的设备有米家直流变频落地扇、米家空气净化器3等（均需升级固件至2.1.0以上版本），更多功能请
            <a href="https://www.xiaomi.cn/post/21469714" target="_blank"
              >点击小米论坛查看</a
            >，更多设备陆续开放支持，改密自动回连功能需配合redmi路由器AX6使用
          </p>
          <p>
            13、小米碰碰贴2的使用需升级米家APP
            安卓客户端至5.8.10及以上版本，更多功能请
            <a href="https://www.xiaomi.cn/post/21431347" target="_blank"
              >点击小米社区查看</a
            >
          </p>
          <p>
            14、小爱同学智能模式需在米家App设置我的智能模式选择对应操作，可配合小爱同学训练计划使用
          </p>
          <p>
            15、小爱同学语音遥控器功能支持所有内置小爱同学功能的智能音箱产品，预计于2020年9月15日上线
          </p>
          <p>
            16、小爱同学智能生活主动建议功能支持所有内置小爱同学的手机、电视、智能音箱产品，该功能目前已上线
          </p>
          <p>
            17、小爱同学儿童音色目前支持的设备有安卓6以上的所有小米手机（需升级小爱同学App至5.14版本）、小米小爱触屏音箱Pro
            8、Redmi小爱触屏音箱 8英寸、小米电视5、小米电视5
            Pro、小米壁画电视、Redmi
            X系列电视、小米电视大师OLED、小米透明电视（各型号需升级小爱同学App至4.1.9版本）。儿童音色将于2020年8月31日前向手机和电视端推送升级，在2020年10月31日前向音箱端推送升级
          </p>
          <p>
            18、小爱同学童声识别功能目前支持小米小爱触屏音箱Pro
            8、Redmi小爱触屏音箱
            8英寸，该功能将于2020年9月底前上线，更多机型将会陆续开放支持,更多功能请
            <a href="https://www.xiaomi.cn/board/5425803" target="_blank"
              >点击小米社区查看</a
            >
          </p>
          <div class="cut-line"></div>
          <div class="miui">
            <svg
              viewBox="0 0 46 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  d="M29.641 0.426758H27.8452V9.78587H29.641V0.426758Z"
                  fill="black"
                  fillOpacity="0.6"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7305 0.426758V5.80532C16.7305 8.2271 18.4407 10.0004 21.2049 10.0004C23.9415 10.0004 25.566 8.22585 25.566 5.80532V0.426758H23.7702V5.85894C23.7702 7.33795 22.9717 8.41416 21.2049 8.41416C19.4657 8.41416 18.554 7.28557 18.554 5.85894V0.426758H16.7305Z"
                  fill="black"
                  fillOpacity="0.6"
                ></path>
                <path
                  d="M14.3076 0.426758H12.5117V9.78587H14.3076V0.426758Z"
                  fill="black"
                  fillOpacity="0.6"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.30053 7.0698L8.32169 3.97711V9.78587H10.1175V0.426758H9.576L5.04493 4.97226L0.51253 0.426758H0V9.78587H1.76684V3.97711L4.87364 7.0698H5.30053Z"
                  fill="black"
                  fillOpacity="0.6"
                ></path>
                <path
                  d="M37.7782 0.426758V9.75864H35.9956V2.02925H34.5449V0.426758H37.7782Z"
                  fill="black"
                  fillOpacity="0.6"
                ></path>
                <path
                  d="M42.2133 8.19023H45.9143V9.66168H40.0683V8.40845L43.6244 4.26595C44.1856 3.625 44.3727 3.21723 44.3727 2.69849C44.3727 2.00391 43.8114 1.5126 43.0196 1.5126C42.2133 1.5126 41.5795 2.07125 41.5795 2.95661H39.9233C39.9233 1.15721 41.2198 0 43.0196 0C44.7192 0 45.9999 1.15845 45.9999 2.69849C45.9999 3.67987 45.4953 4.42931 44.7179 5.31467L42.2133 8.19023Z"
                  fill="black"
                  fillOpacity="0.6"
                ></path>
              </g>
            </svg>
          </div>
          <div class="copyright">
            京ICP证110507号 |
            京ICP备10046444号｜京公网安备11010802020134号｜京网文[2020]0276-042号
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods",
  data() {
    return {
      transform_goodsX: 0, //984.48
      is_Acitive: true,
      is_Acitive2: false,
    };
  },
  watch: {
    transform_goodsX(v) {
      // console.log(v)
      if (v < 0) {
        this.is_Acitive = false;
      } else {
        this.is_Acitive = true;
      }
      if (v === -1968.96) {
        this.is_Acitive2 = true;
      } else {
        this.is_Acitive2 = false;
      }
    },
  },
  methods: {
    left() {
      if (this.transform_goodsX < 0) {
        this.transform_goodsX += 984.48;
      }
    },
    right() {
      if (this.transform_goodsX <= 0 && this.transform_goodsX > -1968.96) {
        this.transform_goodsX -= 984.48;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eee;
  .container {
    margin-top: 18.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title {
      text-align: center;
      background-color: #eee;
      margin-top: -12.5rem;
      margin-bottom: 3.125rem;
      span {
        color: #282828;
        font-size: 1.9125rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        display: inline-block;
      }
      p {
        font-size: 0.65rem;
        color: #646464;
        font-weight: 500;
        line-height: 1.3125rem;
      }
    }
    .swiper-container {
      margin: 0 auto;
      position: relative;
      .main-box {
        width: 58vw;
        overflow: hidden;
        .swiper-wrap {
          width: 200vw;
          height: 20vw;
          text-align: center;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          .swiper-slide {
            cursor: pointer;
            flex: 0 0 8.8%;
            height: 88%;
            background-color: #fff;
            border-radius: 1.25rem;
            margin: 0 0.5%;
            box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.1);
            .img-container {
              height: 50%;
              // margin: 10% auto 0;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 1.125rem auto 0;
              img {
                height: 100%;
              }
            }
            .img-text {
              height: 40%;
              line-height: 3.4vw;
              display: block;
              margin-top: 0.25rem;
              font-weight: 500;
              span {
                font-size: 0.5625rem;
                display: block;
                color: #1a1a1a;
                font-size: 12px;
                font-weight: 500;
                padding: 0;
                margin: 0;
              }
              .text-btn {
                width: 3.375rem;
                height: 1.25rem;
                line-height: 1.25rem;
                font-size: 0.5rem;
                color: #fff;
                background: #000;
                border-radius: 0.9375rem;
                margin: 0 auto 0.875rem;
                text-decoration: none;
                display: block;
              }
            }
          }
        }
      }
    }
    .left {
      position: absolute;
      top: calc(44% - 17.5px);
      left: -3.125rem;
      cursor: pointer;
      img {
        width: 2.1875rem;
        border-radius: 50%;
        box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.1);
      }
    }
    .right {
      position: absolute;
      top: calc(44% - 17.5px);
      right: -3.3125rem;
      cursor: pointer;
      img {
        width: 2.1875rem;
        border-radius: 50%;
        box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
}
.isClick {
  opacity: 0.4;
}
.wrapper{
    width: 100%;
    background-color: #e6e6e6;
    margin-top: 1.54375rem;
    padding-bottom: 1.9125rem;
    .top-context{
        width: 55vw;
        margin: 0 auto;
        .title2{
            font-size: 1.9175rem;
            color: #282828;
            font-weight: 500;
            margin-top: 4.79375rem;
            margin-bottom: 2.35rem;
            display: inline-block; 
        }
        .text-content{
            p{
                color: #b3b3b3;
                font-size: .503125rem;
                margin-bottom: .54375rem;
                line-height: .91875rem;
               
                a{
                    text-decoration: none;
                    color: #3a8dfe;
                }
            }
            .cut-line{
                width: 100%;
                height: 1px;
                background: rgba(0,0,0,.6);
                opacity: .2;
                margin-top: 2.5rem;
            }
            .miui{
                width: 1.5rem;
                cursor: pointer;
                svg{
                    width: 1.5rem;
                    opacity: .7;
                }
            }
            .copyright{
                color: #b3b3b3;
                font-size: .503125rem;
                margin-top: .4375rem;
                margin-bottom: 2.5rem;
            }
        }
    }
}
</style>