Crafty.c('Particle',{
	init: function() {
		this.requires('2D,DOM,Color');
	},
	particle: function(angle,size,color,x,y,speed) {
		this.angle = angle;
		this.attr({w:size,h:size,x:x,y:y});
		this.color(color);
		this.speed = speed;

		this.bind('EnterFrame',this.updatePart);
	},

	updatePart: function() {
		this.x+= this.speed*Math.cos(this.angle)/6;
		this.y+= this.speed*Math.sin(this.angle)/6;
		this.alpha-= 1/120;
		if(this.alpha <= 0)
			this.destroy();
	},
})