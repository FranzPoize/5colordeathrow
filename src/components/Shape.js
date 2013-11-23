'use strict';

Crafty.c('Shape', {
	init: function() {
		this.requires('Enemy');
		this.appearsProgressively = true;
	},
	shape: function( data ) {
		this.attr({
			w: data.width,
			h: data.height
		});

		return this;
	}
});