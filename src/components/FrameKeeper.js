'use strict';

Crafty.c('FrameKeeper', {
	init: function() {
		this.requires('Keyboard');

		this.bind('KeyDown', function( e ) {
			console.log( e.keyCode );

			switch( e.keyCode ) {
			// "p"
			case 80:
				Crafty.pause();
				break;
			// arrow right
			case 39:
				if ( !Crafty.isPaused() ) {
					Crafty.pause();
				}

				e.shiftKey ?
					Crafty.timer.simulateFrames(60):
					Crafty.timer.step();

				break;
			}
		});
	}
});