Crafty.c('NormalEnemy',{
	init: function() {
		this.requires('Enemy');
		this.requires('Delay')
		this.available = true;
	},

	getScore: function(positive) {
		if(positive) {
			return Score.normal.posScore;
		} else {
			return Score.normal.negScore;
		}
	},

	resolveCollision: function(positive) {
		if (positive)
			this.destroy();
	}
});

Crafty.c('ComboEnemy',{
	init: function() {
		this.requires('Enemy');
		this.requires('Delay');
		this.available = true;
		this.ratio = 1;

		// this.bind('EnterFrame',replenishRatio);
	},

	getScore: function(positive) {
		var score;
		if(positive) {
			this.ratio = 0.9 * this.ratio;
			this.replenish = false;
			score = Score.normal.posScore*this.ratio;

			var replenish = this.delay(function() {
				this.replenish;
			},1000);
			console.log(replenish);
		} else {
			score =  Score.normal.negScore;
		}

		return score;
	},

	resolveCollision: function(positive) {
	}
});