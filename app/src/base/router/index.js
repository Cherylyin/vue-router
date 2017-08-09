define(["exports","vue-router","src/content/home/index","src/content/hottopic/index"],function(exports,router,home,hottopic){
    var routes= [
      
        {path:'/home', component:home},
		    {path:'/hottopic', component:hottopic}   
	];
	
	 var r = new router({
      mode:'hash',
      routes:routes
    });
	return r;
  
})