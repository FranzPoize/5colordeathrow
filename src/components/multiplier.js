Crafty.c('Multiplier',{
	init:function() {
		this.requires('2D,DOM,Text');
		this.bind('MultiplierUpdate',this.updateMultiplier);
		this.text('x 1');
	},
	updateMultiplier: function() {
		this.textFont({size:(30+2*Crafty('ProgressBar').getLoopedTimes())+'px'});
		this.text('x '+(Crafty('ProgressBar').getLoopedTimes()+2));
	}
});