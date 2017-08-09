define(["exports",
        "jquery",
        "vue",
        "router",
        "vue-router",
        "src/header/headerComp",
        "src/menu/menuComp",
        "src/footer/footerComp",
        "src/content/contentComp",
        "src/menu/menudata"],function(
          exports,
          $,
          Vue,
          r,
          vueRouter,
          headerComp,
          menuComp,
          footerComp,
          contentComp,
          menudata){

     Vue.use(vueRouter);
    
    var app = new Vue({
        el:'#wrapper',
        components:{
         	  "myheader":headerComp.default,
            "mymenu":menuComp.default,
            "myfooter":footerComp.default

         },
	     router:r
		
        
    });

    exports.default = app;

})