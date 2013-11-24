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
var FOLLOWER_BASE_ACCELERATION = 1.001
var FOLLOWER_MAX_SPEED = null
Crafty.c('Follower', {
	init: function () {
		this.requires('Delay');
		this.bind('EnterFrame', this.updatePos)
		this.speed = FOLLOWER_BASE_SPEED
		this.stageH = Crafty('PlayArea').h
		this.stageW = Crafty('PlayArea').w
		this.change = new Date().getTime();
		this.randomMove_x = (Math.random()*2-1)*FOLLOWER_MAX_SPEED/(Math.sqrt(2)*2);
		this.randomMove_y = (Math.random()*2-1)*FOLLOWER_MAX_SPEED/(Math.sqrt(2)*2);
	},

	updatePos: function () {
		if (null == FOLLOWER_MAX_SPEED) {
			FOLLOWER_MAX_SPEED = Crafty('MoveTo')._fMaxSpeed * 0.2 // Max speed of follower to 90% of max speed of player
		}
		player = Crafty('Player')
		var dx = (player.x - this.x)
		var dy = (player.y - this.y)
		var norm = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
		if (norm === 0) {
			var move_x = 0
			var move_y = 0
		} else {
			if (norm > 250) {
				var now = new Date().getTime();
				if(now - this.change > 500) {
					this.change = now;
					this.randomMove_x = (Math.random()*2-1)*FOLLOWER_MAX_SPEED/(Math.sqrt(2)*2);
					this.randomMove_y = (Math.random()*2-1)*FOLLOWER_MAX_SPEED/(Math.sqrt(2)*2);
				}
				move_x = this.randomMove_x;
				move_y = this.randomMove_y;
				console.log('rmx: '+move_x);
				console.log('rmy: '+move_y);
			} else {
				var move_y = Math.ceil(dy/norm * this.speed)
				var move_x = Math.ceil(dx/norm * this.speed)
				if (true) {};
				if (player.playerColorValue == this.enemyColorValue) {
					
					move_x *= -1
					move_y *= -1
				} else {
					if (Math.abs(move_x) > Math.abs(dx)) {
						move_x = dx
					}
					if (Math.abs(move_y) > Math.abs(dy)) {
						move_y = dy
					}
				}
			}
		}
		this.y += move_y
		this.x += move_x
		if (this.y > this.stageH) {
			this.y = this.stageH - this.h
		} else if (this.y < 0) {
			this.y = 0
		}

		if (this.x > this.stageW) {
			this.x = this.stageW - this.w
		} else if (this.x < 0) {
			this.x = 0
		}
		this.speed = FOLLOWER_BASE_ACCELERATION * this.speed
		if (this.speed > FOLLOWER_MAX_SPEED) {
			this.speed = FOLLOWER_MAX_SPEED
		};
	}
})

Crafty.c('RandomTranslation', {
	baseVelocity:2,

	init: function() {
		this.bind('EnterFrame',this.updatePos);
		this.lastVelocityChange = new Date().getTime()
		this.dx = 1
		this.dy = 1
	},

	randomTranslation: function(velocityX, velocityY) {
		this.velocityX = velocityX || this.baseVelocity;
		this.velocityY = velocityY || this.baseVelocity;
	},

	updatePos: function() {
		if (this.y < 0 || this.y + this.h > Crafty('PlayArea').h) {
			this.velocityY = -this.velocityY;
		}

		if (this.x < 0 || this.x + this.w > Crafty('PlayArea').w) {
			this.velocityX = -this.velocityX;
		}
		var now = new Date().getTime()
		// Change the velocity of this object to a new random one
		// every half a second
		if (now - this.lastVelocityChange > 500) {
			this.dx = Math.random()
			this.dy = Math.random()
			this.lastVelocityChange = now
		};
		this.x += this.velocityX * this.dx;
		this.y += this.velocityY * this.dy;
	}
});
