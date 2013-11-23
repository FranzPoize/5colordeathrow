'use strict';

Crafty.c('Shape', {
	init: function() {
		this.requires('Enemy');
	},
	shape: function( data ) {
		this.attr({
			w: data.width,
			h: data.height
		});
	}
});