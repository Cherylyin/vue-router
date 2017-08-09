require.config({

    paths: {
        'jquery':'./src/base/jquery/jquery-2.2.4',
        'vue':'./src/base/vue/vue',
        'page':'./src/base/router/page',
		'vue-router':'./src/base/router/vue-router',
        "text":'./src/base/text'
    },
    
    packages: [ {
        name: 'jquery',
        location: './src/base/jquery',
        main: 'jquery-2.2.4'
    }, {
        name: 'vue',
        location: './src/base/vue',
        main: 'vue'
    },
     {
        name: 'router',
        location: './src/base/router',
        main: 'index'
    }
    ]
  
});

require(['src/index']);