export default {
    // 作用在家电的切换热门和电影影音部分（没记错的话）
    changePage(state){
        state.navBar_acive = !state.navBar_acive 
        var first = document.querySelector('.first')
        var second =  document.querySelector('.second')
        var sub = document.querySelector('.sub')
        var body = document.querySelector('body')
        console.log(state.navBar_acive)
        
        if(state.navBar_acive){
            first.style="transform: translateY(6.875px) rotate(45deg) translateZ(0px);"
            second.style="transform: rotate(-45deg) translateZ(0px);"
            sub.style="opacity: 0; transform: translateY(16.5px) translateZ(0px);"
            body.style = "overflow: hidden; box-sizing: border-box; padding-right: 17px;"

        }else{
            first.style="transform: none;"
            second.style="transform: none;"
            sub.style="opacity: 1; transform: none;"
            body.style = ""
        }
    },
    showVideo(state){
        state.video_Show = true
    },
    CloseVideo(state){
        state.video_Show = false
    },
    showDetail_page(state){
        state.detail_page = true
    },
    closeDetail_page(state){
        state.detail_page = false
    }
  }