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

var FOLLOWER_BASE_SPEED = 2
var FOLLOWER_BASE_ACCELERATION = 1.02
Crafty.c('Follower', {
	init: function () {
		console.log("HEYHOHOHO")
		this.bind('EnterFrame', this.updatePos)
		this.speed = FOLLOWER_BASE_SPEED
	},

	updatePos: function () {
		console.log("HEYHOHOHO updatePos")
		player = Crafty('Player')
		if (player.color() == this.color()) {
			return
		}
		var dx = (player.x - this.x)
		var dy = (player.y - this.y)
		var norm = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
		var move_y = Math.ceil(dy/norm * this.speed)
		var move_x = Math.ceil(dx/norm * this.speed)
		if (Math.abs(move_x) > Math.abs(dx)) {
			move_x = dx
		}
		if (Math.abs(move_y) > Math.abs(dy)) {
			move_y = dy
		}
		this.y += move_y
		this.x += move_x
		this.speed = FOLLOWER_BASE_ACCELERATION * this.speed
		console.log([this.x, this.y])
	}
})