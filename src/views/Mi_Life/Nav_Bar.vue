<template> 
  <div class="navBar desktop">
      <div class="menu" @click="changePage">
          <span class="first" style="transform: none;"></span>
          <span class="second" style="transform: none;"></span>
          <span class="sub" style="opacity: 1; transform: none;"></span>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'navbar',
    // data(){
    //     return{
    //         // navBar_acive: false
    //     }
    // },
    methods:{
        ...mapMutations(['changePage'])
    }
}
</script>

<style lang="less" scoped>
.navBar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    background-color: #fefefe;
    overflow: hidden;
    .menu{
        padding: 1rem;
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        margin-left: .6rem;
        position: relative;
        span{
            position: absolute;
            display: inline-block;
            width: 1.4rem;
            height: 2px;
            background-color: currentColor;
            border-radius: 20px;
            transition: 0.3s all;
        }
        .first{
            transform-origin: center;
            margin-top: -.28rem;
        }
        .sub{
            width: .9rem;
            margin-top: .3rem;
            transform-origin: center;

        }
    }
}
.navBar.desktop{
    height: 7vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>