'use strict';

Crafty.c('Level', {
	init: function() {
		this.firstFrame = Crafty.frame();
		this.lastEvent = -1;
	},
	level: function( levelData ) {
		var level = this,
			levelDuration = levelData.duration,
			levelName = levelData.name;
		this.totalFrames = levelData.duration * 60 * 1000;
		this.data = levelData;

		this.bind('LevelIgnite', function() {//console.log('LevelIgnite');
			this.unbind('EnterFrame');
			var self = this;
			Crafty.audio.play('chrono',1);
			Crafty.e('2D, DOM, Color, Text, TweenQueue')
				.attr({alpha: 1, x: Crafty.stage.elem.scrollWidth /2 - 32, y: Crafty.stage.elem.scrollHeight /2 - 30, w: 200, h: 100})
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
						this.text('Pan!')
							.attr({alpha: 1, x: this._x - 80});
						Crafty('Player').canMove = true;
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
				for ( var i in data.events ) {
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

				if ( currentEvent !== undefined ) {console.log(currentEvent);
					currentEvent.forEach(function( enemyData ) {
						var componentName = enemyData.type.replace(/^./, function( $0 ) { return $0.toUpperCase(); });

						Crafty.e( componentName )
							.enemy( enemyData );
					});
				}
			});
		});

		this.bind('LevelLand', function() {
			this.unbind('EnterFrame');
			// guys, stop moving please
			Crafty('Enemy').each(function() {
				this.removeComponent('Enemy')
					.removeComponent('Collision')
					.removeComponent('Translation')
					.removeComponent('Follower')
					.removeComponent('RandomTranslation')
					.unbind('EnterFrame');
			});
			// guys, leave me alone please
			Crafty('Player').each(function() {
				this.removeComponent('Collision')
					.removeComponent('PlayerCollision')
					.unbind('EnterFrame');
			});

			if ( parseInt(Crafty('Score').text()) > window.highscores[this.data.id] ) {
				window.highscores[this.data.id] = parseInt(Crafty('Score').text());
				localStorage.setItem("highscores", JSON.stringify(window.highscores));
			}

			Crafty.e('2D, DOM, Color, Mouse, TweenQueue')
				.attr({
					alpha: 0.8,
					x: Crafty.stage.elem.scrollWidth /2,
					y: Crafty.stage.elem.scrollHeight /2,
					w:1,
					h:1
				})
				.color('#FEFEFE')
				.queue([{
					x: Crafty.stage.elem.scrollWidth /4,
					y: Crafty.stage.elem.scrollHeight /4,
					w: Crafty.stage.elem.scrollWidth /2,
					h: Crafty.stage.elem.scrollHeight /2,
					duration: 30
				}], function() {
					Crafty.e('2D, DOM, Text, TweenQueue')
						.attr({
							x: -100,
							y: Crafty.stage.elem.scrollHeight /2 - 110,
							w: 200,
							h: 40
						})
						.text( levelName + ' / ' + Math.floor( levelDuration / 60 ) + ':' + levelDuration % 60 )
						.textColor('#111')
						.textFont({ size: '40px', weight: 'bold'})
						.queue([{
							x: Crafty.stage.elem.scrollWidth /2 - 90,
							duration: 30
						}]);

					Crafty.e('2D, DOM, Text, TweenQueue')
						.attr({
							x: Crafty.stage.elem.scrollWidth,
							y: Crafty.stage.elem.scrollHeight /2 - 50,
							w: 100,
							h: 40
						})
						.text( Crafty('Score')._text )
						.textColor('#111')
						.textFont({ size: '40px', weight: 'bold'})
						.queue([{
							x: Crafty.stage.elem.scrollWidth /2 - ( ( Crafty('Score')._text + '' ).length * 10 ),
							duration: 30
						}]);

					this.bind('Click', function() {
						level.trigger('LevelEnd');
					});

					setTimeout(function() {
						Crafty.e('2D, DOM, Text, TweenQueue')
							.attr({
								x: Crafty.stage.elem.scrollWidth /2 - 135,
								y: Crafty.stage.elem.scrollHeight,
								w: 300,
								h: 60
							})
							.text( 'YOU WISE!' )
							.textColor('#111')
							.textFont({ size: '50px', weight: 'bold'})
							.queue([{
								y: Crafty.stage.elem.scrollHeight /2 + 30,
								duration: 30
							}]);
					}, 500);
				});
		});

		this.trigger('LevelIgnite');

		return this;
	}
});