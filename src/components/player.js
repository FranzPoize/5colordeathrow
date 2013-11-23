Crafty.c('Player',{
	init: function() {
		this.requires('Image');
	},
	playerColor: function(color,name) {
		this.image(window.playerColorAssets[name]);
		this.playerColorValue = color;
		return this;
	}
});