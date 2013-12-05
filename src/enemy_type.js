Crafty.c('NormalEnemy',{
	init: function() {
		this.requires('Enemy');
		this.requires('Delay');
		this.available = true;
	},

	getScore: function(positive) {
		if(positive) {
			return window.ScoreValues.normal.posScore;
		} else {
			return window.ScoreValues.normal.negScore;
		}
	},

	resolveCollision: function(positive) {
		if (positive) {
			for (var i = 0;i< 15;i++) {
				Crafty.e('Particle')
					.particle(Math.random()*Math.PI*2,
						3+Math.random()*7,
						this.enemyColorValue,
						this.x+this.w/2,
						this.y+this.h/2,
						Math.random()*20)
			}
			this.destroy();
			Crafty.audio.play('pos_contact0' + Crafty.math.randomInt(1, 8),1);
		}
		if (!positive) {
			var effect = Crafty.e('BadEffect')
				.badEffect(this.colorName);

			effect.remove();
			Crafty.audio.play('neg_contact0' + Crafty.math.randomInt(1, 8),1);
		} 
	},

	collide: function () {
		return this
	}
});

Crafty.c('DotEnemy',{
	init: function() {
		this.requires('Enemy');
		this.requires('Delay');
		this.available = true;
	},

	getScore: function(positive) {
		if(positive) {
			return window.ScoreValues.dot.posScore;
		} else {
			return window.ScoreValues.dot.negScore;
		}
		for (var i = 0;i< 15;i++) {
			Crafty.e('Particle')
				.particle(Math.random()*Math.PI*2,
					3+Math.random()*7,
					this.enemyColorValue,
					this.x+this.w/2,
					this.y+this.h/2,
					Math.random()*20)
		}
		this.destroy();
	},

	resolveCollision: function(positive) {

		for (var i = 0;i< 15;i++) {
			Crafty.e('Particle')
				.particle(Math.random()*Math.PI*2,
					3+Math.random()*7,
					this.enemyColorValue,
					this.x+this.w/2,
					this.y+this.h/2,
					Math.random()*20)
		}
		if (!positive) {
			var effect = Crafty.e('BadEffect')
				.badEffect(this.colorName);

			effect.remove();
			Crafty.audio.play('neg_contact0' + Crafty.math.randomInt(1, 8),1);
		} else {
			Crafty.audio.play('pos_contact0' + Crafty.math.randomInt(1, 8),1);
		}
		this.destroy();
	},

	collide: function () {
		return this
	}
});

Crafty.c('SnakeEnemy',{
	init: function() {
		this.requires('Enemy');
		this.requires('Delay');
		this.available = true;
	},

	getScore: function(positive) {
		if(positive) {
			return window.ScoreValues.normal.posScore;
		} else {
			return window.ScoreValues.normal.negScore;
		}
		this.parentSnake.destroy()
	},
	
	resolveCollision: function(positive) {

		for (var i = 0;i< 15;i++) {
			Crafty.e('Particle')
				.particle(Math.random()*Math.PI*2,
					3+Math.random()*7,
					this.enemyColorValue,
					this.x+this.w/2,
					this.y+this.h/2,
					Math.random()*20)
		}
		if (!positive) {
			var effect = Crafty.e('BadEffect')
				.badEffect(this.colorName);

			effect.remove();
			Crafty.audio.play('neg_contact0' + Crafty.math.randomInt(1, 8),1);
		} else {
			Crafty.audio.play('pos_contact0' + Crafty.math.randomInt(1, 8),1);
		}
		this.destroy();
	},

	collide: function () {
		return this
	}

});

Crafty.c('ComboEnemy',{
	init: function() {
		this.requires('Enemy, Delay');
		this.available = true;
		this.ratio = 1;

		this.bind('EnterFrame',this.replenishRatio);
	},

	getScore: function(positive) {
		var score;
		if(positive) {
			score = Math.floor(window.ScoreValues.combo.posScore*this.ratio);
		} else {
			score =  window.ScoreValues.combo.negScore;
		}

		return score;
	},

	collide: function () {
		this.ratio = 0.9 * this.ratio
		this.replenish = false;
		this.delay(function() {
			this.replenish = true;
		}, 1000);
		return this
	},

	replenishRatio: function() {
		if (this.replenish && this.ratio <= 1) {
			this.ratio+=0.002;
		}
	},

	resolveCollision: function(positive,player) {
		for (var i = 0;i< 5;i++) {
			Crafty.e('Particle')
				.particle(Math.random()*Math.PI*2,
					3+Math.random()*7,
					this.enemyColorValue,
					player.x+player.w/2,
					player.y+player.h/2,
					Math.random()*20)
		}
		if (!positive) {
			var effect = Crafty.e('BadEffect')
				.badEffect(this.colorName);

			effect.remove();
			Crafty.audio.play('neg_contact0' + Crafty.math.randomInt(1, 8),1);
		} else {
			Crafty.audio.play('pos_contact0' + Crafty.math.randomInt(1, 8),1);
		}
	}
});