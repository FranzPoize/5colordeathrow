'use strict';

Crafty.c('Level', {
	init: function() {
		this.firstFrame = Crafty.frame();
		this.lastEvent = -1;
	},
	level: function( levelData ) {
		this.totalFrames = levelData.duration * 60 * 1000;
		this.data = levelData;

		this.bind('LevelIgnite', function() {//console.log('LevelIgnite');
			this.unbind('EnterFrame');
			var self = this;
			Crafty.audio.play('chrono',1);
			Crafty.e('2D, DOM, Color, Text, TweenQueue')
				.attr({alpha: 1, x: Crafty.stage.elem.scrollWidth /2 - 30, y: Crafty.stage.elem.scrollHeight /2 - 30, w: 200, h: 100})
				.text('3')
				.textColor('#ffffff')
				.textFont({ size: '100px', weight: 'bold'})
				.queue([{
					alpha: 0,
					duration: 30,
					callback: function() {
						this.text('2')
							.attr({alpha: 1});
						Crafty.audio.play('chrono',1);
					}
				}, {
					alpha: 0,
					duration: 30,
					callback: function() {
						this.text('1')
							.attr({alpha: 1});
						Crafty.audio.play('chrono',1);
					}
				}, {
					alpha: 0,
					duration: 30,
					callback: function() {
						this.text('Fire!')
							.attr({alpha: 1});
						Crafty('Player').canMove = true
					}
				}, {
					alpha: 0,
					duration: 30,
					callback: function() {
						this.destroy();
						self.trigger('LevelFire');
					}
				}]);
		});

		this.bind('LevelFire', function() {
			this.unbind('EnterFrame')
				.bind('EnterFrame', function( frame ) {
				var data = this.data,
					ellapsedSeconds = ( frame.frame - this.firstFrame ) * 16.66667 / 1000,
					currentEvent;

				Crafty.trigger('TimeLeft', {'timeleft': data.duration - ellapsedSeconds} );

				if ( ellapsedSeconds > data.duration ) {
					return this.trigger('LevelLand');
				}

				// Shall we play a new event?
				for ( var i in data.events ) {//console.log(i);
					if ( +i > ellapsedSeconds ) {
						return;
					}
					if ( +i > this.lastEvent && ellapsedSeconds > +i ) {
						// an event has been found!
						currentEvent = data.events[i];
						this.lastEvent = +i;
						break;
					}
				}

				if ( currentEvent !== undefined ) {
					currentEvent.forEach(function( enemyData ) {
						var componentName = enemyData.type.replace(/^./, function( $0 ) { return $0.toUpperCase(); });

						Crafty.e( componentName )
							.enemy( enemyData );
					});
				}
			});
		});

		this.bind('LevelLand', function() {
			if( parseInt(Crafty('Score').text()) > window.highscores[this.data.id] )
			{
				window.highscores[this.data.id] = parseInt(Crafty('Score').text());
				sessionStorage.setItem("highscores", JSON.stringify(window.highscores));
			}
			
			this.unbind('EnterFrame')
				.trigger('LevelEnd');
		});

		this.trigger('LevelIgnite');

		return this;
	}
});