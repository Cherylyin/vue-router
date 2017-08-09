//define(["exports","text!./content.html","src/header/headerComp","src/menu/menuComp","src/footer/footerComp"],function(exports,view,headerComp,menuComp,footerComp){
    

define(["exports","text!./content.html","src/content/home/index","src/content/hottopic/index"],function(exports,view,home,hottopic){    

    exports.default = {
         template:"<router-view></router-view>"

    };

})