<template>
  <div class="container desktop">
    <div class="wrapper">
      <div
        class="top-context"
        data-scrollama-index="0"
        style="opacity: 1; transform: none"
      >
        <p class="sub-title">人性智能</p>
        <h1 class="title">小爱同学</h1>
      </div>
      <div class="main" ref="main" >
        <div class="scroll-container" data-scrollama-index="0">
          <div class="sticky desktop">
            <div
              class="img-box sticky-words"
              data-scrollama-index="0"
              style="opacity: 1; transform: none"
            >
              <h2>从被动到主动，从心动到感动。</h2>
              <p class="desc1">
                小爱同学由个人智能助理升级为智能生活管家，
                <br />不仅能提醒日常事务，还能主动建议控制智能设备，
                <br />更懂你的小爱同学, 让生活更自在。
              </p>
            </div>
            <div
              class="sk-item first"
              style="top: 150px; opacity: 1; transform: none"
            >
              <div
                class="img-box"
                data-scrollama-index="0"
                style="opacity: 1; transform: none"
              >
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-card1.6740df9.png"
                  alt=""
                  class="card-img"
                />
                <div
                  class="content scroll-content1"
                  data-scrollama-index="0"
                  style="opacity: 1; transform: none"
                >
                  <p class="desc1 airco">
                    “路上小心~
                    <br />需要在上午10点开启扫地机器人吗？”
                  </p>
                </div>
              </div>
            </div>
            <div
              class="sk-item second"
              style="
                top: 770px;
                opacity: 1;
                transform: scale(0.984) translateZ(0px);
              "
            >
              <div
                class="img-box"
                data-scrollama-index="0"
                style="opacity: 1; transform: none"
              >
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-card2.97cdf74.png"
                  alt=""
                  class="card-img"
                />
                <div
                  class="content scroll-content2"
                  data-scrollama-index="0"
                  style="opacity: 1; transform: none"
                >
                  <p class="desc1 airco">
                    “今天是晴天，PM2.5值为220，
                    <br />要打开小米空气净化器吗？”
                  </p>
                </div>
              </div>
            </div>
            <div
              class="sk-item third"
              style="top: 1390px; opacity: 1; transform: none"
            >
              <div
                class="img-box"
                data-scrollama-index="0"
                style="opacity: 1; transform: none"
              >
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-card3.a7b85fe.png"
                  alt=""
                  class="card-img"
                />
                <div
                  class="content scroll-content3"
                  data-scrollama-index="0"
                  style="opacity: 1; transform: none"
                >
                  <p class="desc1 airco">
                    “室内已经 28 度啦，
                    <br />要帮你打开卧室的空调吗？”
                  </p>
                </div>
              </div>
            </div>
            <div
              class="sk-item forth"
              style="
                top: 2010px;
                opacity: 1;
                transform: scale(0.996) translateZ(0px);
              "
            >
              <div
                class="img-box"
                data-scrollama-index="0"
                style="opacity: 1; transform: none"
              >
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-card4.16b6e3d.png"
                  alt=""
                  class="card-img"
                />
                <div
                  class="content scroll-content4"
                  data-scrollama-index="0"
                  style="opacity: 1; transform: none"
                >
                  <p class="desc1 airco">
                    “外面已经零下20度啦，
                    <br />需要打开客厅的电暖气吗？”
                  </p>
                </div>
              </div>
            </div>
            <div class="sk-item five" style="top: 2630px; opacity: 1">
              <div
                class="img-box"
                data-scrollama-index="0"
                style="opacity: 1; transform: none"
              >
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/miot-homepage/img/mi-card5.fcd9c3b.png"
                  alt=""
                  class="card-img"
                />
                <div
                  class="content scroll-content5"
                  data-scrollama-index="0"
                  style="opacity: 1; transform: none"
                >
                  <p class="desc1 airco">
                    “晚安，好梦。
                    <br />不过书房的灯还没关，要帮你关上吗？”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="more ai-more">
            <div class="more-btn">
              <span class="add">+</span>
            </div>
            <p class="more-desc">更主动的小爱同学，了解一下</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Scroll',
    mounted () {
        window.addEventListener('scroll', this.scrollEvent)
    },
    methods:{
        scrollEvent(){
           var main = document.querySelector('.scroll-container');
            // console.log('距离顶部高度',main.getBoundingClientRect().top);
            var first = document.getElementsByClassName('first')[1]
            var second = document.getElementsByClassName('second')[1]
            var third = document.getElementsByClassName('third')[0]
            var forth = document.getElementsByClassName('forth')[0]
            var five = document.getElementsByClassName('five')[0]
            var top = main.getBoundingClientRect().top;
            if(top < 0){
                first.style = `top: 150px; opacity: ${1+top*0.00015 }; transform: scale(${1+top*0.00015}) translateZ(0px);`

                second.style = `top: ${770+top<=150 ?  150: 770+top}px;opacity: ${1}; transform: scale(${1}) translateZ(0px);`
                if(first.style.opacity<=0.9){
                    second.style = `top: ${770+top<=150 ?  150: 770+top}px; transform: scale(${1+top*0.000015}) translateZ(0px);`
                }

                third.style = `top: ${1390 + top <=150 ? 150: 1390+top}px; opacity: ${1}; transform: scale(${1}) translateZ(0px);`
                if(second.style.opacity<=0.9){
                    third.style = `top: ${1390 + top <=150 ? 150: 1390+top}px; opacity: ${1+top*0.000015}; transform: scale(${1+top*0.000015}) translateZ(0px);`
                }

                forth.style = `top: ${2010 + top <=150 ? 150: 2010+top}px; opacity: ${1}; transform: scale(${1}) translateZ(0px);`
                if(third.style.opacity<=0.9){
                   forth.style = `top: ${2010 + top <=150 ? 150: 2010+top}px; opacity: ${1+top*0.000015}; transform: scale(${1+top*0.000015}) translateZ(0px);`
                }

                five.style = `top: ${2630 + top <=150 ? 150: 2630+top}px; opacity: ${1}; transform: scale(${1}) translateZ(0px);`
                if(forth.style.opacity<=0.9){
                   five.style = `top: ${2630 + top <=150 ? 150: 2630+top}px; opacity: ${1+top*0.000015}; transform: scale(${1+top*0.000015}) translateZ(0px);`
                }
            }

        }
    }
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 1680px){
    .container .wrapper .main .sticky {
        height: 42.5rem;
    }
}
.container {
  .wrapper {
    color: #000;
    width: 28.75rem;
    .top-context {
      text-align: center;
      .sub-title {
        color: #3a3eed;
        font-size: 1.125rem;
        font-weight: 500;
        margin-top: 4.8125rem;
      }
      .title {
        font-size: 2.3125rem;
        font-weight: 500;
        color: #000;
        margin-top: 0.4375rem;
      }
    }
    .main{
        .scroll-container{
            height: 156.25rem;
            position: relative;
        }
        .img-box{
            margin-top: 5.625rem;
            width: 100%;
            position: relative;
            .desc1{
                margin-top:rem;
                color: #666;
                line-height: 1.5625rem;
                font-size: .875rem;
                font-weight: 400px;
            }
            img{
                width: 100%;
                border-radius: 20px;
                box-shadow: 0 1px 7px #999;
            }
            .card-img{
                width: 28.75rem;
                height: 25rem;
            }
            .content{
                position: absolute;
                top: 1.625rem;
                left: 1.3125rem;
                .desc1{
                    line-height: 1.5625rem;
                    font-size: .875rem;
                    font-weight: 400px;
                    color: #fff;  
                }
                .airco{
                    text-align: center;
                    line-height: 1.1875rem!important;
                    color: #fff;
                }
            }
            .content.scroll-content1{
                top: 1.25rem;
                left: 6.875rem;
            }
            .content.scroll-content2{
                top:1.25rem;
                left: 7.8125rem;
            }
        }
        .sticky{
            height: 51.25rem;
            top: 5vh;
            position: -webkit-sticky;
            position: sticky;
            .sticky-words{
                text-align: center;
                top: 5vh;
                p{
                   font-size: .875rem; 
                }
            }
            .sk-item{
               position: absolute; 
            }
        }
        .ai-more{
            position: absolute;
            bottom: 0;
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
  }
}
</style>