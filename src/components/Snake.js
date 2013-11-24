Crafty.c('SnakeChunk', {
	init: function() {
		this.requires('2D, DOM, Image');
		console.log("image() with " + window.enemyColorAsset['snake']['five'])
		this.image(window.enemyColorAsset['snake']['one'])
		this.parent = null
		return this
	},
	snakeChunk: function( parent ) {
		this.parent = parent
		return this;
	},

	updatePos: function () {
		
	}
});

Crafty.c('Snake', {
	init: function() {
		this.requires('ComboEnemy');
		this.elems = []
		this.dx = 1
		this.dy = 1
		this.speedX = 2
		this.speedY = 2
		this.maxW = Crafty('PlayArea').w
		this.maxH = Crafty('PlayArea').h
		this.bind('EnterFrame', this.updatePos)
		return this
	},
	snake: function( data ) {
		this.chunkW = data.chunkW
		this.chunkH = data.chunkH
		this.elems.push(this.newElem())
		this.elems[0].x = data.x
		this.elems[0].y = data.y
		for (var i = 0; i <= data.chunksNumber; i++) {
			this.elems.push(this.newElem())
			this.elems[this.elems.length-1].x = this.elems[this.elems.length-2].x - this.chunkW
			this.elems[this.elems.length-1].y = this.elems[this.elems.length-2].y - this.chunkH
		}
		return this;
	},

	newElem: function () {
		var elem = Crafty.e('SnakeChunk')
		elem.snakeChunk(this)
		elem.w = this.chunkW
		elem.h = this.chunkH
		return elem
	},

	updatePos: function () {
		console.log("Meeh, updatePos() of Snake")
		var speedX = this.speedX
		var speedY = this.speedY
		// console.log(this.elems[0])
		// console.log(this.elems[0].x)
		if (this.elems[0].x >= (this.maxW-this.elems[0].w) || this.elems[0].x < 0) {
			this.speedX *= -1
		}
		if (this.elems[0].y >= (this.maxH-this.elems[0].h) || this.elems[0].y < 0) {
			this.speedY *= -1
		}
		var x = this.elems[0].x,
			y = this.elems[0].y
		this.elems[0].x += this.dx * this.speedX
		this.elems[0].y += this.dy * this.speedY
		// var x_bak, y_bak
		for (var i = 1; i < this.elems.length; i++) {
			var dx = this.elems[i-1].x - this.elems[i].x
			var dy = this.elems[i-1].y - this.elems[i].y
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
			this.elems[i].x += dx * 0.1
			this.elems[i].y += dy * 0.1
			// x = x_bak
			// y = y_bak
		};
		return this;
	}
});

