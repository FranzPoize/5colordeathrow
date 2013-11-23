'use strict';

Crafty.c('TweenQueue', {
	init: function() {
		this.requires('2D, Tween');
		this._tweenQueue = [];

		this.bind('TweenEnd', function( propName ) {
			if ( propName === 'queued' ) {
				// resolve currentTween
				if ( this._currentTween && typeof this._currentTween.callback === 'function' ) {
					this._currentTween.callback();
					this._currentTween = undefined;
				}

				// play next tween in queue
				if ( this._tweenQueue.length ) {

					var tween = this._tweenQueue.shift(),
						props = { queued: 0 },
						i;

					this._currentTween = tween;
					for ( i in tween ) {
						if ( i !== 'duration' && i !== 'callback') {
							props[i] = tween[i];
						}
					}

					this.tween( props, tween.duration );
				}
			}
		});
	},
	queue: function( args, callback ) {//console.log(args)
		var wasEmpty = this._tweenQueue.length === 0,
			tweens = args.constructor === Array ? args : [args],
			lastTween = tweens[ tweens.length -1 ],
			_callback;

		if ( typeof callback === 'function' ) {
			if ( typeof lastTween.callback === 'function' ) {
				_callback = lastTween.callback;
				lastTween.callback = function() {
					_callback();
					callback();
				};
			} else {
				lastTween.callback = callback;
			}
		}

		this._tweenQueue = this._tweenQueue.concat( tweens );

		if ( wasEmpty ) {
			this.trigger('TweenEnd', 'queued');
		}

		return this;
	}
});