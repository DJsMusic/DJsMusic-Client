/**
 * Application controller view
 * Starts application
 *
 * @class App
 * @extends Backbone.View
 * @author Alejandro U. Álvarez <alejandro@urbanoalvarez.es>
 */
require.config({

    baseUrl: 'js/lib',
    
    config:{
    	'api': {
    		// App mode: 1= Testing, 0= Production
    		'mode': 1
    	}
    },
    
    paths: {
        app: '../app',
        tpl: '../tpl',
        jquery : '../lib/jquery-1.9.1.min',
        backbone : '../lib/backbone-min',
        text : '../lib/text',
        underscore : '../lib/underscore-min',
        soundmanager2 : '../lib/soundmanager/script/soundmanager2-jsmin',
        slider : '../lib/bootstrap-slider',
    	api : '../app/api',
    	utils: '../app/utils'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'soundmanager2':{
        	exports: 'soundManager'
        }
    }
});

require(['jquery', 'backbone', 'app/app', 'app/router'], function ($, Backbone, App, Router) {
    App.router = new Router();
});
