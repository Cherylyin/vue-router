define(["exports","./menudata","text!./menu.html"],function(exports,menudata,view){
	
	var menudata = menudata.default;
	exports.default = {
           template:view,
           data:function(){
           	    return {menuArray:menudata}
           }


	}
})