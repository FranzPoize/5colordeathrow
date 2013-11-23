Crafty.c('BadEffect',{
	init: function() {
		this.requires('2D, Image, DOM, Delay');
		this.flipIt = true;

		this.bind('EnterFrame',this.updateEffect);
		var player = Crafty('Player');
		this.attr({x:player.x,y:player.y});
	},
	badEffect:function(color) {
		this.image('assets/FX_Contact/'+color+'_negatif.PNG');
		return this;
	},
	updateEffect:function() {
		if (this.flipIt) {
			this.flipIt = false;
			this.flip('X');
			this.delay(function() {
				this.flipIt = true;
			},300);
		}
		var player = Crafty('Player');
		this.attr({x:player.x,y:player.y});
		return this;
	},

	remove: function() {
		this.delay(function() {
			this.destroy();
		},1000);
		return this;
	}
})