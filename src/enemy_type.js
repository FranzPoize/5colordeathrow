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
		if (positive)
			this.destroy();
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
			return window.ScoreValues.normal.posScore;
		} else {
			return window.ScoreValues.normal.negScore;
		}
	},

	resolveCollision: function(positive) {
		this.destroy();
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
			this.replenish = false;
			score = Math.floor(window.ScoreValues.normal.posScore*this.ratio);
			this.ratio = 0.9 * this.ratio;

			var replenish = this.delay(function() {
				this.replenish = true;
			},1000);
		} else {
			score =  window.ScoreValues.normal.negScore;
		}

		return score;
	},

	replenishRatio: function() {
		if (this.replenish && this.ratio <= 1) {
			this.ratio+=0.002;
		}
	},

	resolveCollision: function(positive) {
	}
});