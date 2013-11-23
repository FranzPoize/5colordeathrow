Crafty.c('Translation', {
	baseVelocity:2,

	init: function() {
		this.bind('EnterFrame',this.updatePos);
	},

	translation: function(orient,velocity) {
		this.orient = orient;
		this.velocity = velocity || this.baseVelocity;
	},

	updatePos: function() {
		if (this.orient == 'vert') {
			if (this.y < 0 || this.y + this.h > Crafty('PlayArea').h)
				this.velocity = -this.velocity;
			this.y += this.velocity;
		}
		else {
			if (this.x < 0 || this.x + this.w > Crafty('PlayArea').w)
				this.velocity = -this.velocity;
			this.x += this.velocity;
		}
	}
});