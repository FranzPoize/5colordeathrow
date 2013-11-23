'use strict';

Crafty.c('Dot', {
	init: function() {
		this.requires('Enemy');
		this.attr({
			w: 20,
			h: 20
		});
	},
	dot: function() {}
});