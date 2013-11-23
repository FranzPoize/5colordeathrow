'use strict';

Crafty.c('FrameKeeper', {
	init: function() {
		this.requires('Keyboard');

		this.bind('KeyDown', function( e ) {
			console.log( e.keyCode );

			switch( e.keyCode ) {
			// arrow right
			case 39:
				//Crafty
				break;
			}
		});
	}
});