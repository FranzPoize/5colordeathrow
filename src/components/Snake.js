"use strict"

Crafty.c('SnakeChunk', {
	init: function() {
		this.requires('2D, DOM, Image');
		this.parentSnake = null
		return this
	},
	snakeChunk: function( parentSnake ) {
		this.parentSnake = parentSnake
		this.image(window.enemyColorAsset['snake'][parentSnake.color])
		return this;
	},

	updatePos: function () {
		
	}
});

Crafty.c('Snake', {
	init: function() {
		this.requires('ComboEnemy');
		this.elems = []
		this.dx = Math.random()
		this.dy = Math.random()
		this.speedX = 5
		this.speedY = 5
		this.maxW = Crafty('PlayArea').w
		this.maxH = Crafty('PlayArea').h
		this.player = Crafty('Player')
		this.bind('EnterFrame', this.updatePos)
		return this
	},
	snake: function( data ) {
		this.color = data.color
		this.chunkW = data.chunkW
		this.chunkH = data.chunkH
		this.speedX = data.speedX
		this.speedY = data.speedY
		this.detectionDistance = data.detectionDistance
		this.elems.push(this.newElem())
		this.elems[0].x = data.x
		this.elems[0].y = data.y
		this.head = this.elems[0]
		for (var i = 0; i <= data.chunksNumber; i++) {
			this.elems.push(this.newElem())
			this.elems[this.elems.length-1].x = this.elems[this.elems.length-2].x - this.chunkW
			this.elems[this.elems.length-1].y = this.elems[this.elems.length-2].y - this.chunkH
		}

		var self = this
		setInterval(function () {
			self.chaseDots()
		}, 150)
		return this;
	},

	chaseDots: function () {
		var dots = Crafty('DotEnemy')
		if (this.target != null) {
			return // We already have a current target !
		};
		for (var i = 0; i < dots.length; i++) {
			var dot = Crafty(dots[i])
			var dist = window.distance(dot, this.head)
			if (dist < this.detectionDistance) {
				this.setTarget(dot)
			};
		};
	},

	setTarget: function (target) {
		this.target = target
	},

	newElem: function () {
		var elem = Crafty.e('SnakeChunk')
		elem.snakeChunk(this)
		elem.w = this.chunkW
		elem.h = this.chunkH
		return elem
	},

	updatePos: function () {
		// If there's the player in the area of detection, go get him!
		var distance_player = window.distance(this.player, this.head)
		if (distance_player < this.detectionDistance && this.player.playerColorValue != this.enemyColorValue) {
			this.setTarget(this.player)
		} else if(this.target === this.player) {
			// If the target was the player but the player
			// is not in range anymore, set target to null
			this.setTarget(null)
		}

		if (this.target != null) {
			var distance_target = window.distance(this.target, this.head)
			if (distance_target === 0) {
				var Dx = 0, Dy = 0
			} else {
				var target_dx = (this.target.x - this.head.x)
				var target_dy = (this.target.y - this.head.y)
				this.dx = target_dx / distance_target
				this.dy = target_dy / distance_target
				var Dx = this.dx * this.speedX
				var Dy = this.dy * this.speedY
				if (Math.abs(Dx) > Math.abs(target_dx)) {
					Dx = target_dx
					if (this.target !== this.player) {
						this.setTarget(null) // For targets other than player, we reached it, stop chasing it
					};
				}
				if (Math.abs(Dy) > Math.abs(target_dy)) {
					Dy = target_dy
					if (this.target !== this.player) {
						this.setTarget(null) // For targets other than player, we reached it, stop chasing it
					};
				}
			}
		} else {
			if (this.head.x >= (this.maxW-this.head.w) || this.head.x < 0) {
				this.dx *= -1
			}
			if (this.head.y >= (this.maxH-this.head.h) || this.head.y < 0) {
				this.dy *= -1
			}
			var Dx = this.dx * this.speedX
			var Dy = this.dy * this.speedY
		}
		this.head.x += Dx
		this.head.y += Dy
		// var x_bak, y_bak
		for (var i = 1; i < this.elems.length; i++) {
			var norm = window.distance(this.elems[i], this.elems[i-1])
			var dx = (this.elems[i-1].x - this.elems[i].x)/norm*(norm-this.chunkW)
			var dy = (this.elems[i-1].y - this.elems[i].y)/norm*(norm-this.chunkW)
			// if (dx < 0) {
			// 	dx = -1 * Math.abs(dx) - this.chunkW/2
			// } else {
			// 	dx = dx - this.chunkW/2
			// }
			// if (dy < 0) {
			// 	dy = -1 * Math.abs(dy) - this.chunkH/2
			// } else {
			// 	dy = dy - this.chunkH/2
			// }
			// var norm = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
			// if (norm != 0) {
			// 	dx = dx / norm * this.elems[i].w
			// 	dy = dy / norm * this.elems[i].h
			// }
			// speedX = this.speedX
			// speedY = this.speedY
			// if (this.elems[i].x > this.maxW || this.elems[i].x < 0) {
			// 	speedX *= -1
			// }
			// if (this.elems[i].y > this.maxH || this.elems[i].y < 0) {
			// 	speedY *= -1
			// }
			// x_bak = this.elems[i].x
			// y_bak = this.elems[i].y
			
			this.elems[i].x += dx
			this.elems[i].y += dy
			// x = x_bak
			// y = y_bak
		};
		return this;
	}
});

