'use strict';

Crafty.c('Enemy', {
	init: function() {
		this.requires('2D, DOM, Image, TweenQueue');
		this._element.draggable = false;
	},
	enemy: function( data ) {
		var self = this;
		this.enemyColorValue = window.color[data.color];

		this.attr({
				alpha: 0,
				x: data.coords[0],
				y: data.coords[1]
			})

			.image( window.enemyColorAsset[ data.type ][data.color],window.enemyColorAsset[ data.type ].repeat )

			// type specific init
			[data.type]( data )

			.appear();

		this.bind('Appeared', function() {
			self.requires(data.scoreType);
			switch(data.behavior.type) {
			case 'Translation':
				this.addComponent('Translation').translation(data.behavior.orient);
				break;
			case 'Follower':
				this.addComponent('Follower');
				break;
			case 'RandomTranslation':
				this.addComponent('RandomTranslation').randomTranslation(
					data.behavior.velocityX,
					data.behavior.velocityY
				);
				break;
			}

			if ( data.lifespan !== undefined ) {
				setTimeout(function() {
					self.queue({
						alpha: 0,
						duration: 15
					}, function() {
						self.destroy();
					});

				}, data.lifespan * 1E3 );
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
			queue = [{
				alpha: 0,
				duration: 15
			}, {
				alpha: 0.7,
				duration: 15
			}, {
				alpha: 0,
				duration: 15
			}, {
				alpha: 0.7,
				duration: 15
			}, {
				alpha: 0,
				duration: 15
			}].concat( queue );
		}

		this.queue(queue, function() {
			self.trigger('Appeared');
		});

		return this;
	}
});