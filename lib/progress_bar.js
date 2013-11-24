/**@
* #ProgressBar
* @category Custom
*
* Used to display the progress of a specific task (e.g. progress of asset loading, HP bar).
* Internally it creates two 2D blocks representing the empty and full part of the progress spectrum. 
* These blocks adjust their size with respect to the current progress. 
* Changes to the progress bar's 2D properties are reflected on to the blocks. 
* The blocks cut the bar along the highest progress bar's dimension 
* (blocks span horizontally if progressbar.width >= progressbar.height).
*
*/
var DECAY = 2;
Crafty.c("ProgressBar", {
	init: function(entity) {
		this.requires("2D,Delay");
		this._pbFilledFraction = 0;
		this._loops = 0;
		this.doNotDecay = false;
		this.toasty = true;

		this.bind('EnterFrame',this.decay);
	},

	decay: function() {
		if(!this.doNotDecay)
			this.updateBarProgress(this.currentProgress() - DECAY);
	},
	
	/**@
	* #.updateBarProgress
	* @comp ProgressBar
	* @sign public void .updateBarProgress(Number currentProgress)
	* @param currentProgress - The current progress. The value must be a 0 <= number <= maxValue 
	* representing the current progress.
	* @return this - The current entity for chaining.
	*
	* Update method to update the current progress of the progressbar.
	*/
	updateBarProgress: function(val) {
		var loops_before = this._loops;
		this.doNotDecay = true;
		this.delay(function() {
			this.doNotDecay = false;
		},600)
		while(val < 0) {
			this._loops -= 1
			//Crafty.audio.play('multiplier_down',1);
			this.firstFull = true;
			val += this._pbMaxValue
			Crafty.trigger('MultiplierUpdate');
		}
		while(val >= this._pbMaxValue) {
			if(this._loops <= 3) {
				this._loops += 1
				//Crafty.audio.play('multiplier_up',1);
				val -= this._pbMaxValue
				Crafty.trigger('MultiplierUpdate');
			} else {
				if(this.firstFull) {
					this.firstFull = false;
					//Crafty.audio.play('multiplier_up_full',1);
				}
				if (this.toasty && Math.random()*100 > 80) {
					this.toasty = false;
					var toasty = Crafty.e('2D,DOM,TweenQueue,Image,Delay')
						.image('assets/toasties/pinouze.png')
						.attr({x:-300,y:100,rotation:70})
						.queue({x:270,y:120,rotation:70,duration:20},function() {
							Crafty.audio.play('toasty',1);
							this.delay(function() {
								toasty.queue({x:-300,y:100,rotation:70,duration:20},function() {
									toasty.destroy();
								});
							},1000);
						});
				}
				val = this._pbMaxValue-0.25;
			}
		}
		if (this._loops < 0) {
			this._loops = 0
			val = 0
		}

		var delay_update = false
		if (loops_before != this._loops) {
			if (loops_before > this._loops) {
				var frac = 0
			} else {
				var frac = 1
			}
			
			delay_update = true
			this._pbFilledFraction = frac
			// Reduce the time for the CSS animation:
			self._pbLowerBlock.css({'transition': 'width 0.1s linear'})
			this._updateBarDimension();
		};

		this._pbFilledFraction = val / this._pbMaxValue;
		if (this._pbFlipDirection)
			this._pbFilledFraction = 1 - this._pbFilledFraction;
		
		if (!delay_update) {
			this._updateBarDimension();
		} else {
			self = this
			setTimeout(function () {
				self._pbLowerBlock.css({'transition': 'None', 'width': frac === 0 ? self.w : 0  })
				setTimeout(function () {
					self._pbLowerBlock.css({'transition': 'width 0.5s linear'})
					self._updateBarDimension()
				}, 50)
			}, 300)
		}
		
		return this;
	},

	_updateBarColor: function () {
		this._pbLowerBlock.color(this._filledColors[this._loops % this._filledColors.length])
	},
	
	_updateBarDimension: function() {
		this._pbBlockWidth = this.w * this._pbFilledFraction;
		this._pbBlockHeight = this.h * this._pbFilledFraction;
		
		if (this._pbBlockWidth >= this._pbBlockHeight) {
			this._pbLowerBlock.attr({ x: this.x, y: this.y, 
									w: this._pbBlockWidth, h: this.h, z: this.z+1 });
			// this._pbHigherBlock.attr({ x: this.x + this._pbBlockWidth, y: this.y, 
			// 						w: this.w - this._pbBlockWidth, h: this.h, z: this.z });
		} else {
			this._pbLowerBlock.attr({ x: this.x, y: this.y, 
									w: this.w, h: this._pbBlockHeight, z: this.z+1 });
			// this._pbHigherBlock.attr({ x: this.x, y: this.y + this._pbBlockHeight, 
			// 						w: this.w, h: this.h - this._pbBlockHeight, z: this.z });
		}

		self = this
		setTimeout(function () {
			self._updateBarColor()
		}, 500)
		
		return this;
	},
	/**@
	* #.progressBar
	* @comp ProgressBar
	* @sign public this .progressBar(Number maxValue, Boolean flipDirection, 
	* String emptyColor, String filledColors)
	* @param maxValue - The maximum value the incoming value can have.
	* @param flipDirection - Whether to flip the fill direction. False to fill blocks from left/top
	* to right/bottom. True to inverse.
	* @param emptyColor - The color for 2D blocks that are empty.
	* @param filledColors - The color for 2D blocks that are filled.
	* @return this - The current entity for chaining.
	*
	* Constructor method to setup the progress bar.
	*
	* @example
	* ~~~
	* var progressBar = Crafty.e("2D, DOM, ProgressBar")
	*	.attr({ x: 150, y : 140, w: 100, h: 25, z: 100 })
	*	.progressBar(100, false, "blue", "green");
	* ...
	* progressBar.updateBarProgress(someValue);
	* ~~~
	*/
	progressBar : function(maxValue, flipDirection, emptyColor, filledColors) {
		this._pbMaxValue = maxValue;
		this._pbFlipDirection = !!flipDirection;
		this._filledColors = filledColors
		var renderMethod = this.has("Canvas") ? "Canvas" : "DOM";

		
		this._pbLowerBlock = Crafty.e("2D, " + renderMethod + ", Color, ProgressBarInner")
					.color(flipDirection ? emptyColor : filledColors[0])
					.attr({x: this.x, y: this.y, z: this.z+1, w: 0, h: this.h});
		this._pbHigherBlock = Crafty.e("2D, " + renderMethod + ", Color")
					.color(flipDirection ? filledColors[0] : emptyColor)
					.attr({x: this.x, y: this.y, z: this.z+1, w: this.w, h: this.h});
		this._updateBarDimension();

		this.bind("Change", this._updateBarDimension);
		this.bind("RemoveComponent", function(component) {
			if (component === "ProgressBar") {
				this.unbind("Change", this._updateBarDimension);
				this._pbLowerBlock.destroy();
				this._pbHigherBlock.destroy();
			}
		});

		return this;
	},
				
	currentProgress: function () {
		var res = this._pbFilledFraction * this._pbMaxValue
		return res
	},

	getLoopedTimes: function () {
		return this._loops;
	}
});