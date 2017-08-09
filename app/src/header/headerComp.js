define(["exports","text!./header.html"],function(exports,view){
	exports.default={
		template:view,
		data:function(){
			return {username:'admin'};
		},
		created:function(){
             if(window.screen.width < 767){
             	this.notphone = false;
             	
             }else{	
             	this.notphone = true;
             }
		}
	}
})