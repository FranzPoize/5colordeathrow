Crafty.c('SnakeChunk', {
	init: function() {
		this.requires('Shape');
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
		this.speedX = 10
		this.speedY = 10
		this.maxX = Crafty('PlayArea').w
		this.maxY = Crafty('PlayArea').h
		this.bind('EnterFrame', this.updatePos)
		return this
	},
	snake: function( data ) {
		this.elems.push(this.newElem())
		this.elems.push(this.newElem())
		this.elems.push(this.newElem())
		this.elems.push(this.newElem())
		this.elems.push(this.newElem())
		return this;
	},

	newElem: function () {
		var elem = Crafty.e('SnakeChunk')
		elem.snakeChunk(this)
		return elem
	},

	updatePos: function () {
		var speedX = this.speedX
		var speedY = this.speedY
		if (this.elems[0].x > this.maxW || this.elems[0].x < 0) {
			speedX *= -1
		}
		if (this.elems[0].y > this.maxH || this.elems[0].y < 0) {
			speedY *= -1
		}
		this.elems[0].x += this.dx * speedX
		this.elems[0].y += this.dy * speedY
		for (var i = 1; i < this.elems.length; i++) {
			var x = this.elems[i].x,
				y = this.elems[i].y
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

