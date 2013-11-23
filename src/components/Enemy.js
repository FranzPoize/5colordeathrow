'use strict';

Crafty.c('Enemy', {
	init: function() {
		this.requires('2D, DOM, Color, TweenQueue');
		this._element.draggable = false;
	},
	enemy: function( data ) {
		var self = this;

		this.attr({
				alpha: 0,
				x: data.coords[0],
				y: data.coords[1]
			})

			.color( window.color[ data.color ] )

			// type specific init
			[data.type]( data )

			.appear();

		this.bind('Appeared', function() {
			self.requires(data.scoreType);
			switch(data.behavior.type) {
			case 'Translation':
				this.addComponent('Translation').translation(data.behavior.orient);
				break;
			}
		});

		return this;
	},
	appear: function() {
		var self = this,
			queue = [{
				alpha: 1,
				duration: 15
			}];

		if ( this.appearsProgressively ) {
			queue = queue.concat([{
				alpha: 0,
				duration: 15
			}, {
				alpha: 1,
				duration: 15
			}, {
				alpha: 0,
				duration: 15
			}, {
				alpha: 1,
				duration: 15
			}]);
		}

		this.queue(queue, function() {
			self.trigger('Appeared');
		});

		return this;
	}
});