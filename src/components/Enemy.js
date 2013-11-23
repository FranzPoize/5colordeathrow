'use strict';

Crafty.c('Enemy', {
	init: function() {
		this.requires('2D, DOM, Color');
		this._element.draggable = false;
	},
	enemy: function( data ) {
		this.attr({
				x: data.coords[0],
				y: data.coords[1]
			})

			.color( window.color[ data.color ] )

			.requires(data.scoreType);

		return this;
	}
});