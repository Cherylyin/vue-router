define(["exports","text!./footer.html"],function(exports,view){
	exports.default = {
		template:view,
		data:function(){
			return {year:2017}
		},
		created:function(){
			var today = new Date();
			this.year = today.getFullYear();
		}
	}
})