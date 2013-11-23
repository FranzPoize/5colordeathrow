Crafty.c('SnakeChunk', {
	init: function() {
		this.requires('2D, DOM, Image');
		console.log("image() with " + window.enemyColorAsset['snake']['five'])
		this.image(window.enemyColorAsset['snake']['one'])
		this.w = 20
		this.h = 20
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
		this.requires('Enemy');
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
		this.elems.push(this.newElem())
		this.elems[0].x = 400
		this.elems[0].y = 400
		this.elems.push(this.newElem())
		this.elems[1].x = 400 - this.elems[0].w
		this.elems[1].y = 400 - this.elems[0].h
		this.elems.push(this.newElem())
		this.elems[2].x = 400 - 2 * this.elems[0].w
		this.elems[2].y = 400 - 2 * this.elems[0].h
		this.elems.push(this.newElem())
		this.elems[3].x = 400 - 3 * this.elems[0].w
		this.elems[3].y = 400 - 3 * this.elems[0].h
		this.elems.push(this.newElem())
		return this;
	},

	newElem: function () {
		var elem = Crafty.e('SnakeChunk')
		elem.snakeChunk(this)
		return elem
	},

	updatePos: function () {
		console.log("Meeh, updatePos() of Snake")
		var speedX = this.speedX
		var speedY = this.speedY
		console.log(this.elems[0])
		console.log(this.elems[0].x)
		if (this.elems[0].x >= (this.maxW-this.elems[0].w) || this.elems[0].x < 0) {
			this.speedX *= -1
		}
		if (this.elems[0].y >= (this.maxH-this.elems[0].h) || this.elems[0].y < 0) {
			this.speedY *= -1
		}
		this.elems[0].x += this.dx * this.speedX
		this.elems[0].y += this.dy * this.speedY
		for (var i = 1; i < this.elems.length; i++) {
			var x = this.elems[i].x - 20,
				y = this.elems[i].y - 20
			// speedX = this.speedX
			// speedY = this.speedY
			// if (this.elems[i].x > this.maxW || this.elems[i].x < 0) {
			// 	speedX *= -1
			// }
			// if (this.elems[i].y > this.maxH || this.elems[i].y < 0) {
			// 	speedY *= -1
			// }
			this.elems[i].x = this.elems[i-1].x
			this.elems[i].y = this.elems[i-1].y
		};
		return this;
	}
});

