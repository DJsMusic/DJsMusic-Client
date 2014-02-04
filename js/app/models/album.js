define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),
        API					= require('api'),

        Model = Backbone.Model.extend({
			
			initialize: function(options){
				console.log('Album: init');
				this.albumId = options.albumId;
			},
			
			url: function(){
				return API.url+"albums/"+this.albumId;
			}
        });

    return Model;
});