<template>
  <div class="layout">
    <div>
      <NavBar />
      <PageContainer />
    </div>
  </div>
</template>

<script>
import NavBar from "./Nav_Bar";
import PageContainer from "./Page_Container";

export default {
  name: "Mi_Life",
  components: {
    NavBar,
    PageContainer,
  },
  mounted() {
      this.resize()
  },
  methods: {
    resize() {
      var container = document.querySelector(".page-container");
      var navbar = document.querySelector(".navBar");
      var menu =  document.querySelector('.menu-bar')
      var container1 = document.querySelector('.container')
      
      window.addEventListener("resize", function () {
        // if(document.body.clientWidth > 1760){
        //   container.className = "page-container wide";
        //   navbar.className = "navBar wide";
        //   menu.className = "menu-bar wide";
        //   container1.className = "container wide";
        // }
        if (document.body.clientWidth < 1760) {
          container.className = "page-container desktop";
          navbar.className = "navBar desktop";
          menu.className = "menu-bar desktop";
          container1.className = "container desktop";


        }
        if (document.body.clientWidth < 1056) {
          container.className = "page-container tablet";
          navbar.className = "navBar tablet";
          menu.className = "menu-bar tablet";
          container1.className = "container tablet";

        }
        if (document.body.clientWidth < 788) {
          container.className = "page-container mobile";
          navbar.className = "navBar mobile";
          menu.className = "menu-bar mobile";
          container1.className = "container mobile";

          
        }
      });
    },
  },
};
</script>

<style>
</style>